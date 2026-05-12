import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  name, shortName, tagline, okpellaMotto, founded, taxStatus, mission,
  objectives, headquarters, contact, social,
  "logo": logo.asset->url,
  "heroImage": heroImage.asset->url
}`;

export const announcementsQuery = groq`{
  "active": *[_type == "announcement" && isPublished == true && placement == "active"] | order(_createdAt desc){
    "id": _id, text, link, type, priority
  },
  "homepage": *[_type == "announcement" && isPublished == true && placement == "homepage"] | order(date desc){
    "id": _id, title, date, excerpt, content, type, link
  }
}`;

export const eventsQuery = groq`{
  "upcoming": *[_type == "event" && isPast != true] | order(date asc){
    "id": _id, title, date, time, location, description, type,
    registrationRequired, memberOnly,
    "image": image.asset->url
  },
  "past": *[_type == "event" && isPast == true] | order(date desc){
    "id": _id, title, date, location, description, type,
    "image": image.asset->url,
    highlights
  },
  "gallery": {
    "culturalEvents": *[_type == "event" && defined(gallery)].gallery[category == "Cultural"]{
      "id": _key,
      "src": image.asset->url,
      caption,
      category
    },
    "communityProjects": *[_type == "event" && defined(gallery)].gallery[category == "Projects"]{
      "id": _key,
      "src": image.asset->url,
      caption,
      category
    },
    "meetings": *[_type == "event" && defined(gallery)].gallery[category == "Meetings"]{
      "id": _key,
      "src": image.asset->url,
      caption,
      category
    }
  }
}`;

export const projectsQuery = groq`{
  "featured": *[_type == "project"] | order(order asc){
    "id": _id, title, shortDescription, fullDescription, status, category, impact,
    partnerships, needs, activities, needsSupport, donationAllocation,
    "images": images[].asset->url,
    updates
  }
}`;

export const leadershipQuery = groq`{
  "executiveCommittee": *[_type == "leader" && role == "exec"] | order(order asc){
    "id": _id, position, name, bio, term,
    "image": image.asset->url
  },
  "boardOfTrustees": *[_type == "leader" && role == "trustee"] | order(order asc){
    "id": _id, name, bio,
    "image": image.asset->url
  },
  "pastPresidents": *[_type == "pastPresident"] | order(order asc){
    name, term
  }
}`;

export const culturePageQuery = groq`*[_type == "culturePage"][0]{
  heritage{
    overview,
    language,
    "landmarks": landmarks[]{
      name, description, significance,
      "image": image.asset->url
    }
  },
  "traditions": traditions[]{
    "id": _key, title, description, occasions, types,
    "image": image.asset->url
  },
  values,
  "heritageSpotlight": heritageSpotlight[]{
    "id": _key, title, excerpt, content,
    "image": image.asset->url
  }
}`;

export const libraryPageQuery = groq`*[_type == "libraryPage"][0]{
  hero{title, tagline, description, "image": image.asset->url},
  about,
  location,
  operations,
  whoWeServe,
  programs,
  impact,
  needs,
  "gallery": gallery[]{
    "id": _key,
    "src": image.asset->url,
    caption,
    category
  },
  support
}`;

export const membershipQuery = groq`*[_type == "membershipPage"][0]{
  eligibility,
  fees,
  benefits,
  goodStanding,
  categories,
  paymentMethods
}`;
