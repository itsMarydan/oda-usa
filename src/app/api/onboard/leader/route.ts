import { NextResponse } from 'next/server';
import { sanityWriteClient } from '@/sanity/writeClient';

export const runtime = 'nodejs';

const ALLOWED_LEADER_IDS = new Set([
  // Executive Committee
  'leader-exec-president',
  'leader-exec-vp',
  'leader-exec-secretary',
  'leader-exec-treasurer',
  'leader-exec-fin-secretary',
  'leader-exec-pro',
  // Trustees
  'leader-trustee-trustee-1',
  'leader-trustee-trustee-2',
  'leader-trustee-trustee-3',
]);

const trim = (v: unknown, max = 2000) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function POST(request: Request) {
  const expectedKey = process.env.LEADER_ONBOARD_SECRET;
  if (!expectedKey) {
    return NextResponse.json({ error: 'Onboarding not configured' }, { status: 500 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const key = trim(form.get('key'), 200);
  if (key !== expectedKey) {
    return NextResponse.json({ error: 'Invalid onboarding key' }, { status: 401 });
  }

  const leaderId = trim(form.get('leaderId'), 100);
  if (!ALLOWED_LEADER_IDS.has(leaderId)) {
    return NextResponse.json({ error: 'Invalid leader position' }, { status: 400 });
  }

  const name = trim(form.get('name'), 120);
  const bio = trim(form.get('bio'), 1500);
  const term = trim(form.get('term'), 50);

  if (!name || !bio) {
    return NextResponse.json({ error: 'Name and bio are required' }, { status: 400 });
  }

  // Optional headshot upload
  const headshot = form.get('headshot');
  let imageAssetRef: { _type: 'image'; asset: { _type: 'reference'; _ref: string } } | null = null;

  if (headshot && headshot instanceof File && headshot.size > 0) {
    if (headshot.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: 'Headshot must be under 8MB' }, { status: 400 });
    }
    if (!headshot.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Headshot must be an image' }, { status: 400 });
    }

    try {
      const buffer = Buffer.from(await headshot.arrayBuffer());
      const asset = await sanityWriteClient.assets.upload('image', buffer, {
        filename: headshot.name,
        contentType: headshot.type,
      });
      imageAssetRef = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    } catch (err) {
      console.error('[onboard-leader] image upload failed', err);
      return NextResponse.json({ error: 'Image upload failed' }, { status: 500 });
    }
  }

  try {
    // Write the submission as a draft so the board reviews + publishes
    const draftId = `drafts.${leaderId}`;
    const patch: Record<string, unknown> = { name, bio };
    if (term) patch.term = term;
    if (imageAssetRef) patch.image = imageAssetRef;

    await sanityWriteClient
      .patch(draftId)
      .setIfMissing({
        _type: 'leader',
        role: leaderId.startsWith('leader-exec-') ? 'exec' : 'trustee',
      })
      .set(patch)
      .commit({ autoGenerateArrayKeys: true });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // The draft might not exist yet; createOrReplace as fallback
    try {
      const draftId = `drafts.${leaderId}`;
      const doc = {
        _id: draftId,
        _type: 'leader',
        role: leaderId.startsWith('leader-exec-') ? 'exec' : 'trustee',
        name,
        bio,
        ...(term ? { term } : {}),
        ...(imageAssetRef ? { image: imageAssetRef } : {}),
      };
      await sanityWriteClient.createOrReplace(doc);
      return NextResponse.json({ ok: true });
    } catch (err2) {
      console.error('[onboard-leader] write failed', err, err2);
      return NextResponse.json({ error: 'Could not save submission' }, { status: 500 });
    }
  }
}
