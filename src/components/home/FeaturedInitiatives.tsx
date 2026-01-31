import Link from 'next/link';
import { Heart, Book, GraduationCap, Activity, Users } from 'lucide-react';

const initiatives = [
  {
    icon: Activity,
    title: 'Dialysis Center Project',
    description: 'Partnering with ENAW to establish life-saving dialysis services in Okpella.',
    link: '/projects#dialysis-center',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Book,
    title: 'Community Library',
    description: 'Supporting education through library operations, staffing, and resources.',
    link: '/projects#community-library',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: 'Welfare Support',
    description: 'Providing emergency assistance and support to community members in need.',
    link: '/projects#welfare-assistance',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: GraduationCap,
    title: 'Scholarships & Education',
    description: 'Investing in future generations through educational scholarships.',
    link: '/projects#scholarships',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Users,
    title: 'Culture & Heritage',
    description: 'Preserving and celebrating Okpella traditions, language, and customs.',
    link: '/culture',
    color: 'text-oda-blue',
    bgColor: 'bg-green-50',
  },
];

export default function FeaturedInitiatives() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-oda-brown mb-4">Our Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Supporting community development through strategic projects and programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <Link
                key={initiative.title}
                href={initiative.link}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 ${initiative.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${initiative.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-oda-brown mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600">
                  {initiative.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
