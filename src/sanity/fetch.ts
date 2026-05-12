import { sanityClient } from './client';
import {
  siteSettingsQuery,
  announcementsQuery,
  eventsQuery,
  projectsQuery,
  leadershipQuery,
  culturePageQuery,
  libraryPageQuery,
  membershipQuery,
} from './queries';

import announcementsJson from '@/data/announcements.json';
import cultureJson from '@/data/culture.json';
import eventsJson from '@/data/events.json';
import leadershipJson from '@/data/leadership.json';
import libraryJson from '@/data/library.json';
import membershipJson from '@/data/membership.json';
import organizationJson from '@/data/organization.json';
import projectsJson from '@/data/projects.json';

const REVALIDATE_SECONDS = 60;

async function fetchWithFallback<T>(query: string, fallback: T, isEmpty: (v: T | null) => boolean): Promise<T> {
  try {
    const result = await sanityClient.fetch<T>(query, {}, { next: { revalidate: REVALIDATE_SECONDS } });
    if (result == null || isEmpty(result)) return fallback;
    return result;
  } catch (err) {
    console.warn('[sanity] fetch failed, using fallback:', err);
    return fallback;
  }
}

const isEmptyObject = (v: unknown) => !v || (typeof v === 'object' && Object.keys(v as object).length === 0);
const isEmptyArrayProp = <K extends string>(key: K) => (v: any) => !v || !Array.isArray(v[key]) || v[key].length === 0;

export function getSiteSettings() {
  return fetchWithFallback<typeof organizationJson>(siteSettingsQuery, organizationJson, isEmptyObject);
}

export function getAnnouncements() {
  return fetchWithFallback<typeof announcementsJson>(
    announcementsQuery,
    announcementsJson,
    (v) => !v || ((!v.active || v.active.length === 0) && (!v.homepage || v.homepage.length === 0))
  );
}

export function getEvents() {
  return fetchWithFallback<typeof eventsJson>(eventsQuery, eventsJson, (v) => !v || (!v.upcoming?.length && !v.past?.length));
}

export function getProjects() {
  return fetchWithFallback<typeof projectsJson>(projectsQuery, projectsJson, isEmptyArrayProp('featured'));
}

export async function getLeadership() {
  const result = await fetchWithFallback<Partial<typeof leadershipJson>>(
    leadershipQuery,
    leadershipJson,
    (v) => !v || (!v.executiveCommittee?.length && !v.boardOfTrustees?.length)
  );
  // governance is static organizational structure — keep in code, not CMS
  return { ...result, governance: leadershipJson.governance } as typeof leadershipJson;
}

export function getCulturePage() {
  return fetchWithFallback<typeof cultureJson>(culturePageQuery, cultureJson, isEmptyObject);
}

export function getLibraryPage() {
  return fetchWithFallback<typeof libraryJson>(libraryPageQuery, libraryJson, isEmptyObject);
}

export function getMembership() {
  return fetchWithFallback<typeof membershipJson>(membershipQuery, membershipJson, isEmptyObject);
}
