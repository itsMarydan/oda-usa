import { Heart, Users, Music, Sparkles } from 'lucide-react';
import cultureData from '@/data/culture.json';
import organizationData from '@/data/organization.json';

export default function CulturePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-gold to-oda-brown text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Okpella Culture & Heritage</h1>
            <p className="text-xl text-white/90">
              Celebrating and preserving our rich traditions, language, and community spirit
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-oda-brown mb-4">Our Heritage</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {cultureData.heritage.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-oda-cream p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-oda-brown mb-4">Language & Motto</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Language</div>
                    <div className="text-xl font-semibold text-oda-green">
                      {cultureData.heritage.language.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {cultureData.heritage.language.status}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="text-sm text-gray-600 mb-2">Traditional Motto</div>
                    <div className="text-2xl font-bold text-oda-brown mb-2">
                      {organizationData.okpellaMotto}
                    </div>
                    <div className="text-lg text-oda-gold italic">
                      &quot;{organizationData.tagline}&quot;
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-oda-green/5 p-8 rounded-xl border-2 border-oda-green">
                <h3 className="text-2xl font-semibold text-oda-brown mb-4">Core Values</h3>
                <ul className="space-y-3">
                  {cultureData.values.map((value, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Heart className="w-5 h-5 text-oda-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {cultureData.heritage.landmarks && cultureData.heritage.landmarks.length > 0 && (
              <div className="mb-12">
                <h2 className="text-oda-brown mb-6 text-center">Natural Landmarks</h2>
                {cultureData.heritage.landmarks.map((landmark, index) => (
                  <div key={index} className="card p-8">
                    <h3 className="text-2xl font-semibold text-oda-brown mb-3">
                      {landmark.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {landmark.description}
                    </p>
                    <div className="bg-oda-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-oda-brown mb-2">Cultural Significance</h4>
                      <p className="text-gray-700 text-sm">
                        {landmark.significance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">Our Traditions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Living traditions that connect us to our roots and bind our community together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cultureData.traditions.map((tradition, index) => (
              <div key={tradition.id} className="card p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-oda-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {index === 0 && <Users className="w-8 h-8 text-oda-green" />}
                    {index === 1 && <Music className="w-8 h-8 text-oda-green" />}
                    {index === 2 && <Sparkles className="w-8 h-8 text-oda-green" />}
                    {index === 3 && <Heart className="w-8 h-8 text-oda-green" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-oda-brown mb-3">
                      {tradition.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {tradition.description}
                </p>
                {tradition.occasions && (
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm mb-2">
                      Celebrated During:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tradition.occasions.map((occasion, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-oda-cream text-oda-brown text-sm rounded-full"
                        >
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {tradition.types && (
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm mb-2">
                      Types:
                    </h4>
                    <ul className="space-y-1">
                      {tradition.types.map((type, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-oda-gold rounded-full"></div>
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">Heritage Spotlight</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stories and insights into our community&apos;s rich history and culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cultureData.heritageSpotlight.map((spotlight) => (
              <div key={spotlight.id} className="card overflow-hidden">
                <div className="bg-gray-200 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-4xl mb-2">📸</div>
                    <div className="text-sm text-gray-500">Image Placeholder</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-oda-brown mb-2">
                    {spotlight.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {spotlight.excerpt}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {spotlight.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-oda-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Preserving Our Heritage Together</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Through cultural events, education programs, and community engagement, we ensure
            that Okpella traditions thrive for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/events" className="btn-primary bg-oda-gold hover:bg-oda-gold/90">
              View Cultural Events
            </a>
            <a href="/membership" className="btn-outline border-white text-white hover:bg-white hover:text-oda-brown">
              Join Our Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
