import { Users, DollarSign, Heart, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Community Members Served',
    color: 'text-oda-blue',
  },
  {
    icon: DollarSign,
    value: '$250K+',
    label: 'Funds Raised for Projects',
    color: 'text-oda-gold',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Scholarships Awarded',
    color: 'text-blue-600',
  },
  {
    icon: Heart,
    value: '200+',
    label: 'Families Supported',
    color: 'text-pink-600',
  },
];

export default function ImpactStats() {
  return (
    <section className="section-padding bg-oda-brown text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Our Impact Since 1999</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Making a measurable difference in the Okpella community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold mb-2 text-oda-gold">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
