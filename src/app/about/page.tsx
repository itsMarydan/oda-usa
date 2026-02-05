import { CheckCircle } from 'lucide-react';
import organizationData from '@/data/organization.json';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-blue to-oda-blue/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">About {organizationData.shortName}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {organizationData.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-oda-brown mb-4">Our Origin & Purpose</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded in {organizationData.founded}, the Okpella Development Association – USA brings together
                indigenes of Okpella residing in the United States and Canada. Our organization serves as a bridge
                between our community members across North America and our homeland, fostering unity and driving
                meaningful development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a registered <strong className="text-oda-blue">{organizationData.taxStatus} nonprofit organization</strong>,
                we maintain the highest standards of transparency and accountability in all our operations. Our
                headquarters is located in {organizationData.headquarters.city}, {organizationData.headquarters.state},
                with members across the United States and Canada.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-oda-brown mb-6">What We Do</h2>
              <div className="space-y-4">
                {organizationData.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-oda-blue flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-oda-cream p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-oda-brown mb-4">Our Motto</h3>
                <p className="text-oda-blue text-xl font-semibold mb-2">
                  {organizationData.tagline}
                </p>
                <p className="text-gray-700 italic">
                  {organizationData.okpellaMotto}
                </p>
              </div>

              <div className="bg-oda-cream p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-oda-brown mb-4">Official Colors</h3>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-oda-blue rounded-full border-2 border-white shadow-sm"></div>
                    <span className="text-gray-700 font-medium">Green</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-oda-gold rounded-full border-2 border-white shadow-sm"></div>
                    <span className="text-gray-700 font-medium">Gold</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Representing growth, prosperity, and our rich heritage
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Commitment to Compliance & Transparency
              </h3>
              <p className="text-blue-800">
                ODA–USA maintains full compliance with IRS regulations for 501(c)(3) organizations. We are
                committed to transparent operations, regular financial reporting, and accountable stewardship
                of all donations and membership dues. All contributions are tax-deductible as allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-oda-brown mb-4">Join Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              Together, we are building a stronger, more vibrant Okpella community through unity,
              service, and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/membership" className="btn-primary">Become a Member</a>
              <a href="/donate" className="btn-secondary">Support Our Work</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
