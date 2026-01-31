import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import organizationData from '@/data/organization.json';

export default function Hero() {
  return (
    <section className="relative bg-oda-sky overflow-hidden">
      {/* Subtle dot pattern for texture */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #4A90E2 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-oda-blue/10 rounded-full text-oda-blue font-semibold text-sm">
            Founded {organizationData.founded} • {organizationData.taxStatus} Nonprofit
          </div>

          <h1 className="text-oda-brown mb-6">
            {organizationData.name}
          </h1>

          <p className="text-xl md:text-2xl text-oda-gold font-semibold mb-4">
            {organizationData.tagline}
          </p>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building a stronger Okpella through unity, service, and development.
          </p>

          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            ODA–USA is a 501(c)(3) nonprofit founded in 1999, supporting community development,
            education, welfare, and cultural heritage for Okpella and our host communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/donate" className="btn-primary inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span>Make a Donation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/membership" className="btn-secondary inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span>Become a Member</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-oda-blue rounded-full"></div>
              <span>Tax-Deductible Donations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-oda-blue rounded-full"></div>
              <span>USA & Canada Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-oda-blue rounded-full"></div>
              <span>Community First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
