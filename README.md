# ODA-USA Website

A modern, professional nonprofit website for the Okpella Development Association – USA.

## Features

- **Modern Next.js 14** with TypeScript and Tailwind CSS
- **Fully responsive** design for mobile, tablet, and desktop
- **Complete page structure**: Home, About, Leadership, Membership, Donate, Projects, Culture, Events, Contact
- **JSON-based data** for easy migration to any backend
- **ODA brand colors**: Green, Gold, Cream, Brown, Sky Blue
- **Accessibility-focused** with proper semantic HTML and ARIA labels

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

## Data Structure

All content is stored in **JSON files** located in `src/data/`:

- `organization.json` - Organization info, mission, contact details
- `leadership.json` - Executive Committee, Board of Trustees, governance
- `projects.json` - All projects and initiatives with details
- `events.json` - Upcoming and past events, gallery
- `culture.json` - Cultural heritage, traditions, values
- `membership.json` - Membership tiers, fees, benefits, eligibility
- `navigation.json` - Site navigation structure
- `announcements.json` - Announcement bar and homepage updates

## Migrating to Your Own Backend

The site is designed for **easy backend migration**. Here's how:

### 1. Replace JSON Imports with API Calls

Current pattern:
```typescript
import organizationData from '@/data/organization.json';
```

Replace with API fetch:
```typescript
const organizationData = await fetch('/api/organization').then(r => r.json());
```

### 2. Create API Routes

In Next.js, create API routes in `src/app/api/`:

```typescript
// src/app/api/organization/route.ts
export async function GET() {
  const data = await yourDatabase.query('SELECT * FROM organization');
  return Response.json(data);
}
```

### 3. Form Submissions

Forms currently log to console. Replace with API calls:

```typescript
// Current (demo):
console.log('Form submitted:', formData);

// Replace with:
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### 4. Database Schema

Use the JSON structure as your database schema. Each JSON file maps to tables:

- `organization` table
- `leadership` table
- `projects` table
- `events` table
- `culture` table
- `membership` table
- `navigation` table
- `announcements` table

### 5. Content Management System (CMS)

Consider integrating:
- **Strapi** - Headless CMS
- **Sanity** - Content platform
- **Contentful** - Enterprise CMS
- **Custom Admin Panel** - Build your own with Next.js API routes

## Customization

### Update Colors

Edit `src/app/globals.css` and `tailwind.config.js`:

```css
:root {
  --oda-brown: #3c2b23;
  --oda-gold: #d99b3b;
  --oda-cream: #f7f0e4;
  --oda-green: #1f6f3e;
  --oda-sky: #2f86c9;
}
```

### Update Content

1. Edit JSON files in `src/data/`
2. Replace placeholder values with real information
3. Add actual images to `public/images/`

### Update Forms

Forms are currently demo-only. Integrate with:
- Email service (SendGrid, Mailgun, AWS SES)
- Form service (Formspree, Netlify Forms)
- Your own API endpoints

## Pages

- **/** - Home with hero, initiatives, impact stats, latest updates
- **/about** - Mission, objectives, organizational info
- **/leadership** - Executive Committee, Board of Trustees, governance
- **/membership** - Eligibility, fees, benefits, application form
- **/donate** - Project cards, donation methods, tax-deductible info
- **/projects** - Detailed project descriptions and updates
- **/culture** - Heritage, traditions, values, cultural spotlight
- **/events** - Upcoming events, past events, photo gallery
- **/contact** - Contact form, office info, quick links

## Components

### Layout Components
- `Header` - Sticky navigation with mobile menu
- `Footer` - Site links, contact info, social media
- `AnnouncementBar` - Top banner for important messages

### Home Components
- `Hero` - Homepage hero section
- `FeaturedInitiatives` - Project showcase cards
- `ImpactStats` - Statistics display
- `LatestUpdates` - Recent announcements

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **JSON** - Data storage (for easy migration)

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy
```

### Other Hosting
```bash
npm run build
# Deploy the .next and public folders
```

## Support

For questions about the site structure or migration:
- Review the JSON files in `src/data/`
- Check component code in `src/components/`
- Review page code in `src/app/`

## License

© 2024 Okpella Development Association – USA. All rights reserved.
