'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useState } from 'react';
import announcementsData from '@/data/announcements.json';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  const activeAnnouncement = announcementsData.active[0];

  if (!isVisible || !activeAnnouncement) return null;

  return (
    <div className="bg-oda-blue text-white py-2 px-4 relative">
      <div className="container-custom flex items-center justify-center">
        <p className="text-sm text-center">
          {activeAnnouncement.link ? (
            <Link
              href={activeAnnouncement.link}
              className="hover:underline"
            >
              {activeAnnouncement.text}
            </Link>
          ) : (
            activeAnnouncement.text
          )}
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:bg-white/10 rounded-full p-1 transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
