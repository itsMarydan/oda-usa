'use client';

import { useState } from 'react';
import { CheckCircle, DollarSign, Users, Award } from 'lucide-react';
import membershipData from '@/data/membership.json';

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    okpellaConnection: '',
    membershipType: 'single',
    additionalInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! This is a demo form. In production, this would submit your application.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-sky to-oda-green text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">Become a Member</h1>
            <p className="text-xl text-white/90">
              Join a community dedicated to unity, progress, and Okpella development
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-oda-brown mb-6">Who Can Join</h2>
              <div className="space-y-3">
                {membershipData.eligibility.map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-oda-green flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-oda-cream p-8 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-8 h-8 text-oda-green" />
                  <h3 className="text-2xl font-semibold text-oda-brown">Membership Fees</h3>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-300">
                    <div className="text-sm text-gray-600 mb-1">Application Fee (One-time)</div>
                    <div className="text-3xl font-bold text-oda-green">
                      ${membershipData.fees.application.amount}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {membershipData.fees.application.refundable ? 'Refundable' : 'Non-refundable'}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Annual Dues</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Single Member</span>
                        <span className="text-xl font-bold text-oda-gold">
                          ${membershipData.fees.annualDues.single.amount}/year
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Married Couple</span>
                        <span className="text-xl font-bold text-oda-gold">
                          ${membershipData.fees.annualDues.married.amount}/year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-oda-green/5 p-8 rounded-xl border-2 border-oda-green">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-oda-green" />
                  <h3 className="text-2xl font-semibold text-oda-brown">Member Benefits</h3>
                </div>
                <ul className="space-y-3">
                  {membershipData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-oda-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span>Good Standing</span>
              </h3>
              <p className="text-blue-800 mb-3">
                Members in good standing enjoy full voting rights and participation privileges. Requirements include:
              </p>
              <ul className="space-y-2">
                {membershipData.goodStanding.requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2 text-blue-800">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-oda-brown mb-6 text-center">Membership Application</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                  State/Province *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Minnesota, Ontario"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="okpellaConnection" className="block text-sm font-medium text-gray-700 mb-2">
                  Connection to Okpella *
                </label>
                <input
                  type="text"
                  id="okpellaConnection"
                  name="okpellaConnection"
                  value={formData.okpellaConnection}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Born in Okpella, Parent from Okpella, Spouse of Okpella indigene"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Type *
                </label>
                <select
                  id="membershipType"
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                >
                  <option value="single">Single ($150/year)</option>
                  <option value="married">Married Couple ($300/year)</option>
                </select>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your interest in joining ODA-USA..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-green focus:border-transparent"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>

              <p className="text-sm text-gray-500 text-center">
                Application fee of ${membershipData.fees.application.amount} will be collected separately upon approval.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
