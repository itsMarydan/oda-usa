import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import announcementsData from '@/data/announcements.json';

export default function LatestUpdates() {
  const updates = announcementsData.homepage.slice(0, 3);

  return (
    <section className="section-padding bg-oda-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-oda-blue font-semibold text-sm uppercase tracking-wider mb-3">Stay Connected</span>
          <h2 className="text-oda-brown mb-4">Latest Updates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about our initiatives and community news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {updates.map((update) => (
            <div key={update.id} className="card p-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{new Date(update.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <h3 className="text-xl font-semibold text-oda-brown mb-2">
                {update.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {update.excerpt}
              </p>
              {update.link && (
                <Link
                  href={update.link}
                  className="text-oda-blue hover:text-oda-navy font-semibold inline-flex items-center space-x-1 group transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/events" className="btn-outline inline-flex items-center space-x-2">
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
