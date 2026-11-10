import type { FooterColumn, NavigationItem } from '../types';
import { classes } from './classes';

/**
 * Primary navigation. Home-page sections use `/#anchor` links so they also
 * work from inner pages such as /contact or /blog.
 */
export const primaryNav: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/#classes' },
  { label: 'Events', href: '/#schedule' },
  { label: 'Dance Team', href: '/blog/dance-team' },
  { label: 'Resources', href: '/blog'},
  { label: 'Sponsors', href: '/#sponsors'},
  { label: 'Boosters', href: '/boosters'}
];

/** Buttons on the right side of the header. Remove an entry to hide it. */
export const headerActions = {
  schedule: { label: 'Tickets', ariaLabel: 'Book tickets for events', href: 'https://glhsdance.ludus.com' },
  memberships: { ariaLabel: 'Donate and support', href: 'https://glhsdance.ludus.com/donate' },
};

export const footerColumns: FooterColumn[] = [
  {
    title: 'GLHS Dance',
    links: [
      { label: 'Classes', href: '/#classes' },
      { label: 'Dance Team', href: '/blog/dance-team' },
      { label: 'Events', href: '/#schedule' },
      { label: 'Resources', href: '/blog' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Boosters', href: '/boosters'}
    ],
  },
  {
    title: 'Classes',
    links: classes.slice(0, 5).map((item) => ({ label: item.title, href: '/#classes' })),
  },
];

/** Optional legal links. Only add pages that exist (e.g. /privacy). */
export const legalNav: NavigationItem[] = [];
