'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import navigationData from '@/data/navigation.json';
import organizationData from '@/data/organization.json';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-oda-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
              ODA
            </div>
            <div className="hidden md:block">
              <div className="text-oda-brown font-bold text-lg leading-tight">
                {organizationData.shortName}
              </div>
              <div className="text-oda-gold text-xs">
                {organizationData.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationData.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  item.featured
                    ? 'font-bold'
                    : 'font-medium'
                } ${
                  isActivePath(item.href)
                    ? 'text-oda-blue bg-oda-sky'
                    : item.featured
                    ? 'text-oda-blue hover:text-oda-blue hover:bg-oda-sky'
                    : 'text-gray-700 hover:text-oda-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              href="/donate"
              className="btn-primary hidden md:inline-block"
            >
              Donate
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <nav className="flex flex-col space-y-2">
              {navigationData.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    item.featured
                      ? 'font-bold'
                      : 'font-medium'
                  } ${
                    isActivePath(item.href)
                      ? 'text-oda-blue bg-oda-sky'
                      : item.featured
                      ? 'text-oda-blue hover:text-oda-blue hover:bg-oda-sky'
                      : 'text-gray-700 hover:text-oda-blue hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center mt-4"
              >
                Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
