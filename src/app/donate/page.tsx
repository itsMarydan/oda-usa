'use client';

import { useState } from 'react';
import { Heart, Activity, Book, Users, GraduationCap, Sparkles, CreditCard, Smartphone } from 'lucide-react';
import projectsData from '@/data/projects.json';

const projectIcons: Record<string, any> = {
  'dialysis-center': Activity,
  'community-library': Book,
  'welfare-assistance': Heart,
  'scholarships': GraduationCap,
  'cultural-promotion': Users,
};

export default function DonatePage() {
  const [selectedProject, setSelectedProject] = useState('general');
  const [wantsReceipt, setWantsReceipt] = useState(true);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-blue to-oda-brown text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm">
              501(c)(3) Tax-Deductible Donations
            </div>
            <h1 className="mb-6 text-white">Support Our Mission</h1>
            <p className="text-xl text-white/90">
              Your tax-deductible donation powers community development, education, healthcare, and cultural preservation in Okpella
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">Choose Where Your Donation Goes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Direct your contribution to a specific project or support our general fund
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <button
              onClick={() => setSelectedProject('general')}
              className={`card p-6 text-left transition-all ${
                selectedProject === 'general'
                  ? 'ring-4 ring-oda-blue shadow-lg'
                  : 'hover:shadow-lg'
              }`}
            >
              <div className="w-12 h-12 bg-oda-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-oda-gold" />
              </div>
              <h3 className="text-xl font-semibold text-oda-brown mb-2">General Fund</h3>
              <p className="text-gray-600">
                Support all our initiatives and allow us to allocate resources where they&apos;re needed most
              </p>
            </button>

            {projectsData.featured.filter(p => p.needsSupport).map((project) => {
              const Icon = projectIcons[project.id] || Activity;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`card p-6 text-left transition-all ${
                    selectedProject === project.id
                      ? 'ring-4 ring-oda-blue shadow-lg'
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 bg-oda-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-oda-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-oda-brown mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.shortDescription}
                  </p>
                  {project.status && (
                    <div className="mt-3 inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {project.status}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-oda-brown mb-8 text-center">How to Donate</h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="mb-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wantsReceipt}
                    onChange={(e) => setWantsReceipt(e.target.checked)}
                    className="w-5 h-5 text-oda-blue rounded focus:ring-oda-blue"
                  />
                  <span className="text-gray-700 font-medium">
                    I would like a tax receipt for my donation
                  </span>
                </label>
                <p className="text-sm text-gray-500 ml-8 mt-1">
                  Donations are tax-deductible. We&apos;ll send you a receipt for your records.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-oda-blue transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Zelle</h3>
                      <p className="text-gray-600 mb-3">
                        Quick and easy mobile payment
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-sm text-gray-600 mb-1">Send to:</div>
                        <div className="font-mono text-oda-blue font-semibold">
                          [Insert Zelle Email]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-oda-blue transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank Transfer</h3>
                      <p className="text-gray-600 mb-3">
                        Direct transfer to our account
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Bank Name:</span>{' '}
                          <span className="font-semibold">[Insert Bank Name]</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Account Name:</span>{' '}
                          <span className="font-semibold">Okpella Development Association - USA</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Account Number:</span>{' '}
                          <span className="font-semibold">[Insert Account Number]</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Routing Number:</span>{' '}
                          <span className="font-semibold">[Insert Routing Number]</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-oda-blue transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">PayPal / Credit Card</h3>
                      <p className="text-gray-600 mb-3">
                        Donate securely online
                      </p>
                      <button className="btn-primary">
                        Donate with PayPal
                      </button>
                      <p className="text-xs text-gray-500 mt-2">
                        You&apos;ll be redirected to PayPal to complete your donation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-oda-cream border-l-4 border-oda-gold p-6 rounded-r-lg">
              <h3 className="font-semibold text-oda-brown mb-2">Important Notes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-oda-gold mt-1">•</span>
                  <span>
                    All donations are tax-deductible. ODA-USA is a registered 501(c)(3) nonprofit organization.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-oda-gold mt-1">•</span>
                  <span>
                    Please include your email address with your donation so we can send you a receipt.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-oda-gold mt-1">•</span>
                  <span>
                    If donating to a specific project, please include the project name in your payment note.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-oda-gold mt-1">•</span>
                  <span>
                    For questions about donations, please contact us at [Insert Contact Email].
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-oda-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Every Contribution Makes a Difference</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Your generosity helps us build schools, support healthcare, preserve culture, and empower the next generation of Okpella leaders.
          </p>
          <p className="text-oda-gold font-semibold text-xl">
            Thank you for your support!
          </p>
        </div>
      </section>
    </div>
  );
}
