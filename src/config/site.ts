import type { SiteConfig } from '../types';

/**
 * Central site configuration.
 *
 * Change your studio name, contact details, social links,
 * form endpoints and SEO defaults here. Everything below is fictional demo
 * content — replace it before you launch.
 *
 * The production URL is set in `astro.config.mjs` (or the SITE_URL env var).
 */
export const site: SiteConfig = {
  name: 'Green Level Dance',
  logoText: 'Green Level Dance',
  tagline: 'Green Level High School Dance Department',
  description:
    'The Green Level Dance Department is a program that offers beginning-advance level dance classes during the school day as a fine arts credit.',
  footerAbout:
    'The Green Level Dance Department is a program that offers beginning-advance level dance classes during the school day as a fine arts credit. Our program focuses on teaching Ballet, Modern/Contemporary, Jazz, Tap, and Choreography. We have one concert each semester filled with both student and teacher choreography from all genres.',
  lang: 'en',
  locale: 'en_US',

  // Demo mode keeps the placeholder address and phone number out of structured data.
  isDemo: true,

  contact: {
    email: 'contact@example.com',
    phone: '(919) 694-9222',
    phoneHref: '9196949222',
    address: {
      street: '7600 Roberts Rd.',
      locality: 'Cary',
      region: 'NC',
      postalCode: '27519',
      country: 'USA',
    },
  },

  // Replace these with profile URLs.
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/g_l_dance', icon: 'camera' },
    { label: 'Instagram', href: 'https://www.instagram.com/gl_danceteam', icon: 'camera' },
    { label: 'Email', href: 'mailto:adula2@wcpss.net', icon: 'mail'},
    { label: 'Website', href: 'https://greenlevelhs.wcpss.net/', icon: 'globe' },
     // { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'play' },
  ],

  bookingUrl: 'https://glhsdance.ludus.com/',

  forms: {
    // e.g. 'https://formspree.io/f/your-form-id' — see README › Contact form.
    contactAction: '',
    newsletterAction: '',
  },

  seo: {
    defaultTitle: 'Green Level High School Dance Department | Dance Team',
    titleSeparator: '|',
    ogImage: '/og-default.jpg',
    ogImageAlt: 'GLHS Dancers performing on stage',
    twitterHandle: '',
    themeColor: '#F5F4F1',
  },

  copyright: 'Green Level VAD Boosters.',
};
