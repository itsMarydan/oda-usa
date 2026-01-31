import Link from 'next/link';
import { ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-blue to-oda-sky text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Our Projects & Initiatives</h1>
            <p className="text-xl text-white/90">
              Strategic investments in healthcare, education, welfare, and cultural preservation
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {projectsData.featured.map((project, index) => (
              <div
                key={project.id}
                id={project.id}
                className={`scroll-mt-24 ${index !== 0 ? 'pt-16 border-t border-gray-200' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-block mb-3 px-3 py-1 bg-oda-blue/10 text-oda-blue text-sm font-semibold rounded-full">
                      {project.category}
                    </div>
                    <h2 className="text-oda-brown mb-4">{project.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {project.fullDescription}
                    </p>

                    {project.status && (
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-700">Status:</span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    )}

                    {project.impact && (
                      <div className="bg-oda-cream p-5 rounded-lg mb-6">
                        <h4 className="font-semibold text-oda-brown mb-2">Impact</h4>
                        <p className="text-gray-700">{project.impact}</p>
                      </div>
                    )}

                    {project.partnerships && project.partnerships.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-oda-brown mb-2">Partnerships</h4>
                        <ul className="space-y-1">
                          {project.partnerships.map((partner, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-oda-blue flex-shrink-0" />
                              <span>{partner}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.needs && project.needs.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-oda-brown mb-3">Current Needs</h4>
                        <ul className="space-y-2">
                          {project.needs.map((need, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-700">
                              <div className="w-2 h-2 bg-oda-gold rounded-full flex-shrink-0"></div>
                              <span>{need}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.activities && project.activities.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-oda-brown mb-3">Activities</h4>
                        <ul className="space-y-2">
                          {project.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-oda-blue flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.needsSupport && (
                      <Link
                        href={`/donate`}
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <span>Support This Project</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    )}

                    {project.updates && project.updates.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-oda-brown mb-4">Recent Updates</h4>
                        <div className="space-y-4">
                          {project.updates.map((update, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-sm text-oda-blue font-semibold">
                                  {update.date}
                                </span>
                                <span className="text-sm text-gray-500">•</span>
                                <span className="text-sm font-semibold text-gray-700">
                                  {update.title}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm">{update.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="sticky top-24">
                      <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-6xl mb-3">📷</div>
                          <div className="text-gray-600 font-medium">{project.title}</div>
                          <div className="text-sm text-gray-500 mt-1">Image Placeholder</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-oda-brown mb-4">Help Us Make a Difference</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Your support enables us to continue these vital projects and launch new initiatives
            that transform lives in the Okpella community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary inline-flex items-center space-x-2">
              <span>Make a Donation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/membership" className="btn-outline inline-flex items-center space-x-2">
              <span>Become a Member</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
