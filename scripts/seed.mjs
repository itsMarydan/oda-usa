// Seed the Sanity dataset from src/data/*.json
// Usage: node --env-file=.env.local scripts/seed.mjs

import { createClient } from '@sanity/client';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, '../src/data');

const readJson = (name) => JSON.parse(readFileSync(resolve(dataDir, name), 'utf8'));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, or SANITY_WRITE_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

const log = (msg) => console.log(`[seed] ${msg}`);

const docs = [];

// --- siteSettings (singleton) ---
{
  const org = readJson('organization.json');
  docs.push({
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: org.name,
    shortName: org.shortName,
    tagline: org.tagline,
    okpellaMotto: org.okpellaMotto,
    founded: org.founded,
    taxStatus: org.taxStatus,
    mission: org.mission,
    objectives: org.objectives,
    headquarters: org.headquarters,
    contact: org.contact,
    social: org.social,
  });
}

// --- announcements (collection) ---
{
  const ann = readJson('announcements.json');
  for (const a of ann.active) {
    docs.push({
      _id: `announcement-active-${a.id}`,
      _type: 'announcement',
      placement: 'active',
      text: a.text,
      link: a.link,
      type: a.type,
      priority: a.priority,
      isPublished: true,
    });
  }
  for (const a of ann.homepage) {
    docs.push({
      _id: `announcement-homepage-${a.id}`,
      _type: 'announcement',
      placement: 'homepage',
      title: a.title,
      date: a.date,
      excerpt: a.excerpt,
      content: a.content,
      type: a.type,
      link: a.link,
      isPublished: true,
    });
  }
}

// --- events (collection) ---
{
  const evs = readJson('events.json');
  const orderDate = (d) => (typeof d === 'string' ? d : '');
  let i = 0;
  for (const e of evs.upcoming) {
    i++;
    docs.push({
      _id: `event-upcoming-${e.id}`,
      _type: 'event',
      title: e.title,
      slug: { _type: 'slug', current: e.id },
      date: e.date,
      time: e.time,
      location: e.location,
      description: e.description,
      type: e.type,
      registrationRequired: e.registrationRequired,
      memberOnly: e.memberOnly,
      isPast: false,
    });
  }
  for (const e of evs.past) {
    docs.push({
      _id: `event-past-${e.id}`,
      _type: 'event',
      title: e.title,
      slug: { _type: 'slug', current: e.id },
      date: e.date,
      location: e.location,
      description: e.description,
      type: e.type,
      isPast: true,
      highlights: e.highlights,
    });
  }
}

// --- projects (collection) ---
{
  const prj = readJson('projects.json');
  let order = 0;
  for (const p of prj.featured) {
    order++;
    docs.push({
      _id: `project-${p.id}`,
      _type: 'project',
      title: p.title,
      slug: { _type: 'slug', current: p.id },
      shortDescription: p.shortDescription,
      fullDescription: p.fullDescription,
      status: p.status,
      category: p.category,
      impact: p.impact,
      partnerships: p.partnerships,
      needs: p.needs,
      activities: p.activities,
      needsSupport: p.needsSupport,
      donationAllocation: p.donationAllocation,
      updates: (p.updates || []).map((u, idx) => ({ _key: `update-${idx}`, ...u })),
      order,
    });
  }
}

// --- leadership: leader + pastPresident ---
{
  const ldr = readJson('leadership.json');
  let order = 0;
  for (const m of ldr.executiveCommittee) {
    order++;
    docs.push({
      _id: `leader-exec-${m.id}`,
      _type: 'leader',
      name: m.name,
      role: 'exec',
      position: m.position,
      bio: m.bio,
      term: m.term,
      order,
    });
  }
  let tOrder = 0;
  for (const m of ldr.boardOfTrustees) {
    tOrder++;
    docs.push({
      _id: `leader-trustee-${m.id}`,
      _type: 'leader',
      name: m.name,
      role: 'trustee',
      bio: m.bio,
      order: tOrder,
    });
  }
  let pIdx = 0;
  for (const p of ldr.pastPresidents) {
    pIdx++;
    docs.push({
      _id: `pastPresident-${pIdx}`,
      _type: 'pastPresident',
      name: p.name,
      term: p.term,
      order: pIdx,
    });
  }
}

// --- culturePage (singleton) ---
{
  const c = readJson('culture.json');
  docs.push({
    _id: 'culturePage',
    _type: 'culturePage',
    heritage: {
      overview: c.heritage.overview,
      language: c.heritage.language,
      landmarks: (c.heritage.landmarks || []).map((l, i) => ({ _key: `landmark-${i}`, ...l, image: undefined })),
    },
    traditions: (c.traditions || []).map((t) => ({
      _key: t.id,
      title: t.title,
      description: t.description,
      occasions: t.occasions,
      types: t.types,
    })),
    values: c.values,
    heritageSpotlight: (c.heritageSpotlight || []).map((s) => ({
      _key: s.id,
      title: s.title,
      excerpt: s.excerpt,
      content: s.content,
    })),
  });
}

// --- libraryPage (singleton) ---
{
  const l = readJson('library.json');
  docs.push({
    _id: 'libraryPage',
    _type: 'libraryPage',
    hero: l.hero,
    about: l.about,
    location: l.location,
    operations: {
      ...l.operations,
      supportedAreas: (l.operations?.supportedAreas || []).map((a, i) => ({ _key: `area-${i}`, ...a })),
    },
    whoWeServe: {
      ...l.whoWeServe,
      audiences: (l.whoWeServe?.audiences || []).map((a, i) => ({ _key: `aud-${i}`, ...a })),
    },
    programs: {
      ...l.programs,
      services: (l.programs?.services || []).map((s, i) => ({ _key: `svc-${i}`, ...s })),
    },
    impact: {
      ...l.impact,
      metrics: (l.impact?.metrics || []).map((m, i) => ({ _key: `metric-${i}`, ...m })),
    },
    needs: {
      ...l.needs,
      categories: (l.needs?.categories || []).map((c, i) => ({ _key: `cat-${i}`, ...c })),
    },
    support: {
      ...l.support,
      ways: (l.support?.ways || []).map((w, i) => ({ _key: `way-${i}`, ...w })),
    },
  });
}

// --- membershipPage (singleton) ---
{
  const m = readJson('membership.json');
  docs.push({
    _id: 'membershipPage',
    _type: 'membershipPage',
    eligibility: m.eligibility,
    fees: m.fees,
    benefits: m.benefits,
    goodStanding: m.goodStanding,
    categories: (m.categories || []).map((c, i) => ({ _key: `cat-${i}`, ...c })),
    paymentMethods: m.paymentMethods,
  });
}

log(`Importing ${docs.length} documents...`);

const tx = client.transaction();
for (const d of docs) tx.createOrReplace(d);
const result = await tx.commit();
log(`Done. ${result.results.length} documents committed.`);
