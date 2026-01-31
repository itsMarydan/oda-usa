import Link from 'next/link';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import organizationData from '@/data/organization.json';

export default function Hero() {
  return (
    <section className="relative bg-oda-sky overflow-hidden">
      {/* Geometric pattern for visual interest */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #4A90E2 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-oda-blue/10 rounded-full" />
        <div className="absolute top-32 right-20 w-12 h-12 border-4 border-oda-gold/15 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-4 border-oda-blue/10 rounded-full" />
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-oda-gold/10 rounded-full" />
      </div>

      <div className="container-custom section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-oda-blue font-semibold text-sm shadow-sm border border-oda-blue/10">
            <span className="w-2 h-2 bg-oda-blue rounded-full animate-pulse"></span>
            Founded {organizationData.founded} • {organizationData.taxStatus} Nonprofit
          </div>

          {/* Main headline - bolder */}
          <h1 className="text-oda-brown mb-6 font-bold tracking-tight">
            {organizationData.name}
          </h1>

          {/* Tagline - more prominent */}
          <p className="text-2xl md:text-3xl text-oda-gold font-bold mb-6">
            {organizationData.tagline}
          </p>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building a stronger Okpella through unity, service, and development.
          </p>

          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            ODA–USA is a 501(c)(3) nonprofit founded in 1999, supporting community development,
            education, welfare, and cultural heritage for Okpella and our host communities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/donate" className="btn-primary inline-flex items-center space-x-2 w-full sm:w-auto justify-center text-lg px-8 py-4">
              <Heart className="w-5 h-5" />
              <span>Make a Donation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/membership" className="btn-secondary inline-flex items-center space-x-2 w-full sm:w-auto justify-center text-lg px-8 py-4">
              <Users className="w-5 h-5" />
              <span>Become a Member</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust indicators - more visual */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full">
              <div className="w-8 h-8 bg-oda-blue/10 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-oda-blue" />
              </div>
              <span className="text-gray-700 font-medium">Tax-Deductible</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full">
              <div className="w-8 h-8 bg-oda-blue/10 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-oda-blue" />
              </div>
              <span className="text-gray-700 font-medium">USA & Canada</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full">
              <div className="w-8 h-8 bg-oda-blue/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-oda-blue" />
              </div>
              <span className="text-gray-700 font-medium">Since 1999</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
