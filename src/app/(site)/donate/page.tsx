import { getProjects } from '@/sanity/fetch';
import DonateView from './DonateView';

export default async function DonatePage() {
  const projectsData = await getProjects();
  return <DonateView projectsData={projectsData} />;
}
