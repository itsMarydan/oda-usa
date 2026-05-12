import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getSiteSettings } from '@/sanity/fetch';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const org = await getSiteSettings();
  return {
    title: `${org.name} | ${org.tagline}`,
    description: org.mission,
    keywords:
      'Okpella, ODA-USA, nonprofit, 501(c)(3), community development, cultural preservation',
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
