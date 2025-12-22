'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import organizationData from '@/data/organization.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form. In production, this would send your message to ODA-USA.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-brown to-oda-green text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-white/90">
              We&apos;d love to hear from you. Reach out with questions, suggestions, or to learn more about ODA-USA
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-oda-brown mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you&apos;re interested in joining ODA-USA, supporting our projects, or learning
                more about Okpella culture, we&apos;re here to help. Fill out the form and we&apos;ll
                get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-oda-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-oda-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-oda-brown mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      {organizationData.headquarters.city}, {organizationData.headquarters.county}
                      <br />
                      {organizationData.headquarters.state}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {organizationData.headquarters.note}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-oda-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-oda-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-oda-brown mb-1">Email</h3>
                    <a
                      href={`mailto:${organizationData.contact.email}`}
                      className="text-gray-600 hover:text-oda-green transition-colors"
                    >
                      {organizationData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-oda-sky/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-oda-sky" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-oda-brown mb-1">Phone</h3>
                    <a
                      href={`tel:${organizationData.contact.phone}`}
                      className="text-gray-600 hover:text-oda-green transition-colors"
                    >
                      {organizationData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-oda-cream rounded-xl">
                <h3 className="font-semibold text-oda-brown mb-3">Office Hours</h3>
                <p className="text-gray-700 text-sm mb-2">
                  We typically respond to inquiries within 2-3 business days.
                </p>
                <p className="text-gray-600 text-sm">
                  For urgent matters, please indicate &quot;URGENT&quot; in your subject line.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-oda-brown mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="donation">Donation Question</option>
                    <option value="project">Project Information</option>
                    <option value="event">Event Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-oda-brown mb-6">Quick Links</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/about"
                className="card p-6 hover:scale-105 transition-transform text-center"
              >
                <h3 className="font-semibold text-oda-brown mb-2">Learn About Us</h3>
                <p className="text-sm text-gray-600">Our mission and values</p>
              </a>
              <a
                href="/membership"
                className="card p-6 hover:scale-105 transition-transform text-center"
              >
                <h3 className="font-semibold text-oda-brown mb-2">Join ODA-USA</h3>
                <p className="text-sm text-gray-600">Become a member</p>
              </a>
              <a
                href="/donate"
                className="card p-6 hover:scale-105 transition-transform text-center"
              >
                <h3 className="font-semibold text-oda-brown mb-2">Make a Donation</h3>
                <p className="text-sm text-gray-600">Support our projects</p>
              </a>
              <a
                href="/events"
                className="card p-6 hover:scale-105 transition-transform text-center"
              >
                <h3 className="font-semibold text-oda-brown mb-2">View Events</h3>
                <p className="text-sm text-gray-600">Upcoming gatherings</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
