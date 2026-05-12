import { getMembership } from '@/sanity/fetch';
import MembershipView from './MembershipView';

export default async function MembershipPage() {
  const membershipData = await getMembership();
  return <MembershipView membershipData={membershipData} />;
}
