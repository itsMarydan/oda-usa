import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import { getAnnouncements, getSiteSettings } from '@/sanity/fetch';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [organizationData, announcements] = await Promise.all([
    getSiteSettings(),
    getAnnouncements(),
  ]);

  return (
    <>
      <AnnouncementBar active={announcements.active} />
      <Header organizationData={organizationData} />
      <main className="min-h-screen">{children}</main>
      <Footer organizationData={organizationData} />
    </>
  );
}
