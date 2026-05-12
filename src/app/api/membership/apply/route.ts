import { NextResponse } from 'next/server';
import { sanityWriteClient } from '@/sanity/writeClient';

export const runtime = 'nodejs';

type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  state?: string;
  okpellaConnection?: string;
  membershipType?: 'single' | 'married';
  additionalInfo?: string;
};

const trim = (v: unknown, max = 2000) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const firstName = trim(body.firstName, 80);
  const lastName = trim(body.lastName, 80);
  const email = trim(body.email, 200);
  const okpellaConnection = trim(body.okpellaConnection, 2000);

  if (!firstName || !lastName || !email || !okpellaConnection) {
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const membershipType = body.membershipType === 'married' ? 'married' : 'single';

  try {
    await sanityWriteClient.create({
      _type: 'membershipApplication',
      status: 'pending',
      firstName,
      lastName,
      email,
      phone: trim(body.phone, 60),
      state: trim(body.state, 100),
      okpellaConnection,
      membershipType,
      additionalInfo: trim(body.additionalInfo, 5000),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[membership] write failed', err);
    return NextResponse.json({ error: 'Could not submit application' }, { status: 500 });
  }
}
