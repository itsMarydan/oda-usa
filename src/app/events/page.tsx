import { Calendar, MapPin, Users, Clock, ChevronRight } from 'lucide-react';
import eventsData from '@/data/events.json';

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-sky to-oda-green text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Events & Gallery</h1>
            <p className="text-xl text-white/90">
              Join us at upcoming events and explore our community moments
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendars and join us for these exciting community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {eventsData.upcoming.map((event) => (
              <div key={event.id} className="card p-6 hover:scale-105 transition-transform">
                <div className="inline-block mb-3 px-3 py-1 bg-oda-green/10 text-oda-green text-sm font-semibold rounded-full">
                  {event.type}
                </div>
                <h3 className="text-xl font-semibold text-oda-brown mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-oda-gold flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  {event.time && (
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-oda-gold flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-oda-gold flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  {event.memberOnly && (
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      Members Only
                    </span>
                  )}
                  {event.registrationRequired && (
                    <button className="text-oda-green hover:text-oda-green/80 font-medium text-sm inline-flex items-center space-x-1">
                      <span>Register</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">Past Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our community milestones and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {eventsData.past.map((event) => (
              <div key={event.id} className="card overflow-hidden">
                <div className="bg-gray-200 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-4xl mb-2">📸</div>
                    <div className="text-sm text-gray-500">Event Photo</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                    {event.type}
                  </div>
                  <h3 className="text-xl font-semibold text-oda-brown mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                    <span>•</span>
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {event.description}
                  </p>
                  {event.highlights && (
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">
                        Highlights:
                      </h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-oda-gold rounded-full flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-oda-brown mb-4">Photo Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing moments from our community events and initiatives
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-oda-brown mb-6 text-center">
              Cultural Events
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {eventsData.gallery.culturalEvents.map((photo) => (
                <div key={photo.id} className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📷</div>
                      <div className="text-xs text-gray-500 px-2">Image</div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-oda-brown mb-6 text-center">
              Community Projects
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {eventsData.gallery.communityProjects.map((photo) => (
                <div key={photo.id} className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📷</div>
                      <div className="text-xs text-gray-500 px-2">Image</div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-oda-brown mb-6 text-center">
              Meetings & Gatherings
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {eventsData.gallery.meetings.map((photo) => (
                <div key={photo.id} className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📷</div>
                      <div className="text-xs text-gray-500 px-2">Image</div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-oda-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Stay Connected</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Don&apos;t miss our upcoming events. Join our mailing list or follow us on social media
            for the latest updates and announcements.
          </p>
          <a href="/contact" className="btn-primary bg-white text-oda-green hover:bg-gray-100">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
