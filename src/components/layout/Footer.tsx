import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import organizationData from '@/data/organization.json';
import navigationData from '@/data/navigation.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-oda-brown text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-oda-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                ODA
              </div>
              <div>
                <div className="font-bold text-lg">{organizationData.shortName}</div>
                <div className="text-oda-gold text-sm">{organizationData.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              {organizationData.mission.substring(0, 150)}...
            </p>
            <div className="text-sm text-gray-400">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold">Founded:</span>
                <span>{organizationData.founded}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Status:</span>
                <span>{organizationData.taxStatus} Nonprofit</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationData.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-oda-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigationData.footer.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-oda-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  {organizationData.headquarters.city}, {organizationData.headquarters.state}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${organizationData.contact.email}`}
                  className="hover:text-oda-gold transition-colors"
                >
                  {organizationData.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{organizationData.contact.phone}</span>
              </li>
            </ul>

            <div className="mt-4 flex space-x-3">
              <a
                href={organizationData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-oda-green rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={organizationData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-oda-green rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={organizationData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-oda-green rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            <span className="text-oda-gold font-semibold">Ikhugbe arho Jo&apos;Dhalo</span> — Unity for Progress
          </p>
          <p>
            © {currentYear} {organizationData.name}. All rights reserved.
          </p>
          <p className="mt-2">
            Tax-deductible donations | EIN: [Insert EIN]
          </p>
        </div>
      </div>
    </footer>
  );
}
