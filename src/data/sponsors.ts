import type { Sponsor } from '../types';

// Add sponsors here. Each item has a `name`, `role`, `image` object, and an array of `socials` objects. The `image` object has a `src` and an `alt` string. Each `socials` object has a `label`, `href`, and an `icon` string.

export const sponsors: Sponsor[] = [
  {
    name: 'Gator Realty',
    role: '2026 Swamp Sponsor',
    image: { src: '/images/ex-realtor.jpg', alt: 'Open house sign on a neighborhood sidewalk' },
    socials: [
      { label: 'Realty on Instagram', href: 'https://www.instagram.com/', icon: 'camera' },
      { label: 'Realty Home Page', href: 'https://www.youtube.com/', icon: 'house' },
    ],
  },
  {
    name: 'Swamp Construction',
    role: 'Gold Sponsor',
    image: { src: '/images/ex-builder.jpg', alt: 'Worker helping to build large steel structure' },
    socials: [
      { label: 'Builder on Instagram', href: 'https://www.instagram.com/', icon: 'camera' },
      { label: 'Builder on YouTube', href: 'https://www.youtube.com/', icon: 'play' },
    ],
  },
  {
    name: 'Much Needed Coffee',
    role: 'Diamond Sponsor',
    image: { src: '/images/ex-coffee.jpg', alt: 'Starbucks logo' },
    socials: [
      { label: 'Starbucks on Instagram', href: 'https://www.instagram.com/', icon: 'camera' },
      { label: 'Starbucks on YouTube', href: 'https://www.youtube.com/', icon: 'play' },
    ],
  },
  {
    name: 'The Mator Family',
    role: '2026 Silver Sponsor',
    image: { src: '/images/GreenLevelHS_Logo_Mascot.jpg', alt: 'Mator Gator Logo' },
    socials: [
      { label: 'Mator on Instagram', href: 'https://www.instagram.com/', icon: 'camera' },
      { label: 'Mator on YouTube', href: 'https://www.youtube.com/', icon: 'play' },
    ],
  },
];
