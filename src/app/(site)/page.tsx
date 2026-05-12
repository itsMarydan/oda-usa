import Hero from '@/components/home/Hero';
import LibraryFeature from '@/components/home/LibraryFeature';
import FeaturedInitiatives from '@/components/home/FeaturedInitiatives';
import ImpactStats from '@/components/home/ImpactStats';
import LatestUpdates from '@/components/home/LatestUpdates';

export default function Home() {
  return (
    <>
      <Hero />
      <LibraryFeature />
      <FeaturedInitiatives />
      <ImpactStats />
      <LatestUpdates />
    </>
  );
}
