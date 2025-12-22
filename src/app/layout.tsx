import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import organizationData from '@/data/organization.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${organizationData.name} | ${organizationData.tagline}`,
  description: organizationData.mission,
  keywords: 'Okpella, ODA-USA, nonprofit, 501(c)(3), community development, cultural preservation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
