import { NextResponse } from 'next/server';
import { sanityWriteClient } from '@/sanity/writeClient';

export const runtime = 'nodejs';

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
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

  const name = trim(body.name, 120);
  const email = trim(body.email, 200);
  const message = trim(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    await sanityWriteClient.create({
      _type: 'contactSubmission',
      status: 'new',
      name,
      email,
      phone: trim(body.phone, 60),
      subject: trim(body.subject, 200),
      message,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] write failed', err);
    return NextResponse.json({ error: 'Could not save submission' }, { status: 500 });
  }
}
