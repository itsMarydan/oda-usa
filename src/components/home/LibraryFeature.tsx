import Link from 'next/link';
import { BookOpen, ArrowRight, Heart, Users, GraduationCap } from 'lucide-react';
import libraryData from '@/data/library.json';

export default function LibraryFeature() {
  return (
    <section className="section-padding bg-gradient-to-br from-oda-blue to-oda-blue/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold text-sm">Flagship Initiative</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {libraryData.hero.title}
            </h2>

            <p className="text-xl md:text-2xl text-white/90 font-semibold mb-6">
              {libraryData.hero.tagline}
            </p>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              The Okpella Community Library is a core ODA-USA initiative providing free access
              to educational resources, study space, and learning support. We support staffing,
              security, and ongoing operations to ensure students and community members have
              the tools they need to succeed.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Students Served</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-sm text-white/80">Books Available</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">Daily</div>
                <div className="text-sm text-white/80">Community Hub</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/library"
                className="inline-flex items-center justify-center space-x-2 bg-white text-oda-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                <span>Visit the Library Page</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center justify-center space-x-2 bg-oda-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-oda-gold/90 transition-all shadow-lg"
              >
                <Heart className="w-5 h-5" />
                <span>Support the Library</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <div className="aspect-[4/3] bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <BookOpen className="w-24 h-24 mx-auto mb-4 text-white/40" />
                  <div className="text-white/60 font-medium">Library Image Placeholder</div>
                  <div className="text-sm text-white/40 mt-1">Students reading and learning</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-oda-gold rounded-full"></div>
                  <span className="text-sm">Located in Okugbe, Okpella</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-oda-gold rounded-full"></div>
                  <span className="text-sm">Managed by ODA-USA</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-oda-gold rounded-full"></div>
                  <span className="text-sm">Free access for all community members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
