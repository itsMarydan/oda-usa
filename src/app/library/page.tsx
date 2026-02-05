import Link from 'next/link';
import { BookOpen, MapPin, Clock, Users, GraduationCap, Heart, Calendar, Laptop, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import libraryData from '@/data/library.json';

const iconMap: Record<string, any> = {
  BookOpen,
  Book: BookOpen,
  Users,
  GraduationCap,
  Heart,
  Calendar,
  Laptop,
};

export default function LibraryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-oda-blue to-oda-brown text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">ODA-USA Flagship Initiative</span>
            </div>
            <h1 className="mb-6 text-white">{libraryData.hero.title}</h1>
            <p className="text-2xl text-white/90 font-semibold mb-6">
              {libraryData.hero.tagline}
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {libraryData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="btn-primary bg-white text-oda-blue hover:bg-gray-100 inline-flex items-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Donate to the Library</span>
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-oda-blue inline-flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Get Involved</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-oda-brown mb-6 text-center">{libraryData.about.title}</h2>
            {libraryData.about.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
            <div className="bg-oda-blue/10 border-l-4 border-oda-blue p-6 rounded-r-lg mt-8">
              <h3 className="text-xl font-semibold text-oda-brown mb-3">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                {libraryData.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-oda-blue/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-oda-blue" />
                </div>
                <h2 className="text-2xl font-semibold text-oda-brown">Location & Hours</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Address</div>
                  <div className="text-lg font-semibold text-gray-900">{libraryData.location.address}</div>
                  <div className="text-gray-600">{libraryData.location.region}</div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Management</div>
                  <div className="text-gray-900">{libraryData.location.managedBy}</div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Operating Hours</span>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Weekdays:</span>
                      <span className="font-medium">{libraryData.location.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekends:</span>
                      <span className="font-medium">{libraryData.location.hours.weekends}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">{libraryData.location.hours.note}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-oda-brown mb-4">{libraryData.operations.title}</h3>
              <p className="text-gray-700 mb-6">{libraryData.operations.description}</p>
              <div className="space-y-4">
                {libraryData.operations.supportedAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-oda-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">{area.area}</div>
                      <div className="text-sm text-gray-600">{area.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Funding Model</div>
                <p className="text-gray-700 text-sm">{libraryData.operations.fundingModel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-oda-brown mb-4">{libraryData.whoWeServe.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The library welcomes all members of the Okpella community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {libraryData.whoWeServe.audiences.map((audience, index) => {
              const Icon = iconMap[audience.icon] || Users;
              return (
                <div key={index} className="card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-oda-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-oda-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-oda-brown mb-2">
                    {audience.group}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-oda-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-oda-brown mb-4">{libraryData.programs.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services supporting learning and community development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryData.programs.services.map((service, index) => {
              const Icon = iconMap[service.icon] || BookOpen;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-oda-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-oda-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-oda-brown mb-1">
                        {service.name}
                      </h3>
                      {service.status && (
                        <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                          {service.status}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-oda-blue text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-6">{libraryData.impact.title}</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {libraryData.impact.statement}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {libraryData.impact.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-oda-gold flex-shrink-0 mt-1" />
                  <p className="text-white/90 text-lg">{point}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {libraryData.impact.metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-oda-gold mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-white mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-white/70">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-oda-brown mb-4">{libraryData.needs.title}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {libraryData.needs.description}
              </p>
            </div>

            <div className="space-y-6">
              {libraryData.needs.categories.map((category, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-oda-blue transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-oda-brown">
                      {category.category}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      category.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                      category.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {category.priority} Priority
                    </span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <AlertCircle className="w-4 h-4 text-oda-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-oda-brown mb-4">Library Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into the Okpella Community Library
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {libraryData.gallery.map((photo) => (
              <div key={photo.id} className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <BookOpen className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <div className="text-xs text-gray-500">{photo.category}</div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                  <p className="text-white/70 text-xs">{photo.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-oda-brown to-oda-blue text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">{libraryData.support.title}</h2>
            <p className="text-2xl text-white/90 font-semibold mb-4">
              {libraryData.support.message}
            </p>
            <p className="text-lg text-white/80 mb-8">
              {libraryData.support.callToAction}
            </p>

            {libraryData.support.taxDeductible && (
              <div className="inline-block bg-white/20 px-6 py-3 rounded-lg mb-8">
                <p className="text-white font-semibold">
                  All donations are tax-deductible • ODA-USA is a 501(c)(3) nonprofit
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {libraryData.support.ways.map((way, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-2 border-white/20 hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {way.method}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm">
                    {way.description}
                  </p>
                  <Link
                    href={way.link}
                    className="text-oda-gold hover:text-white font-medium inline-flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="btn-primary bg-oda-gold hover:bg-oda-gold/90 text-white inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Heart className="w-6 h-6" />
                <span>Donate Now</span>
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-oda-brown inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Users className="w-6 h-6" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
