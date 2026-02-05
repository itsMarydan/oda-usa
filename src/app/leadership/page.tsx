import { Users, Shield, Building } from 'lucide-react';
import leadershipData from '@/data/leadership.json';

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-gold to-oda-gold/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Leadership & Governance</h1>
            <p className="text-xl text-white/90">
              Dedicated leaders guiding our community toward progress and prosperity
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">Executive Committee</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Executive Committee manages day-to-day operations and implements the vision
              set forth by the General Assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {leadershipData.executiveCommittee.map((member) => (
              <div key={member.id} className="card p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-oda-blue to-oda-sky rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <div className="text-sm text-oda-gold font-semibold mb-1">
                  {member.position}
                </div>
                <h3 className="text-xl font-semibold text-oda-brown mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {member.bio}
                </p>
                <div className="text-xs text-gray-500">
                  Term: {member.term}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-oda-gold" />
              <h2 className="text-oda-brown mb-0">Board of Trustees</h2>
            </div>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
              {leadershipData.governance.boardOfTrustees.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadershipData.boardOfTrustees.map((trustee) => (
                <div key={trustee.id} className="card p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-oda-gold to-oda-cream rounded-full flex items-center justify-center text-oda-brown text-2xl font-bold">
                    {trustee.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-oda-brown mb-2">
                    {trustee.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {trustee.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">How Decisions Are Made</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our governance structure ensures transparency, accountability, and member participation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-oda-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-oda-blue" />
              </div>
              <h3 className="text-xl font-semibold text-oda-brown mb-3 text-center">
                General Assembly
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {leadershipData.governance.generalAssembly.description}
              </p>
              <div className="text-sm text-gray-500 text-center space-y-1">
                <div>
                  <strong>Meets:</strong> {leadershipData.governance.generalAssembly.meetingFrequency}
                </div>
                <div>
                  <strong>Quorum:</strong> {leadershipData.governance.generalAssembly.quorum}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-oda-gold/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Building className="w-8 h-8 text-oda-gold" />
              </div>
              <h3 className="text-xl font-semibold text-oda-brown mb-3 text-center">
                Executive Committee
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {leadershipData.governance.executiveCommittee.description}
              </p>
              <div className="text-sm text-gray-500 text-center">
                <div>
                  <strong>Meets:</strong> {leadershipData.governance.executiveCommittee.meetingFrequency}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-oda-sky/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-oda-sky" />
              </div>
              <h3 className="text-xl font-semibold text-oda-brown mb-3 text-center">
                Board of Trustees
              </h3>
              <p className="text-gray-600 text-center">
                {leadershipData.governance.boardOfTrustees.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
