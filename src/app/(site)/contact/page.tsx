import { getSiteSettings } from '@/sanity/fetch';
import ContactView from './ContactView';

export default async function ContactPage() {
  const organizationData = await getSiteSettings();
  return <ContactView organizationData={organizationData} />;
}
