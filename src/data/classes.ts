import type { DanceClass } from '../types';

/**
 * Edit class information here. The `href` field can point to a Google Doc, subpage, or any other resource that provides more information about the class.
 */

export const classes: DanceClass[] = [
  {
    title: 'Dance I',
    description: 'Beginning Modern Dance is designed for incoming 9th graders or students who have never taken dance at the high school level. Click to view the curriculum.',
    image: { src: '/images/GLHS_Dance_2026-57_P.jpg', alt: 'Students holding downward-facing dog on mats in a bright studio' },
    level: 'Beginner',
    href: 'https://docs.google.com/document/d/1C5wXT4tt78gca4_b0jDxseotnztgT0EO_zYxTzmn-xs/edit?usp=sharing',
  },
  {
    title: 'Dance II',
    description: 'In Intermediate Modern Dance, we begin to explore Choreography and further build student knowledge in Dance History, Kinesiology/Anatomy, and Vocabulary.',
    image: { src: '/images/GLHS_Dance_2026-31_P.jpg', alt: 'Woman reaching into an extended side-angle pose on a blue mat in a studio' },
    level: 'Intermediate',
    href: 'https://docs.google.com/document/d/1uGNl77JA7isrg8CaBAJwkMeyiJ9VVQYRn5M_icORUTU/edit?usp=sharing',
  },
  {
    title: 'Dance III/IV',
    description: 'To advance in Dance 3 and Dance 4 (Proficient and Advanced Honors), you must complete an audition or the Proficient level with a 90% or above.',
    image: { src: '/images/dance-teal2.jpg', alt: 'Person folding forward over their legs in a seated stretch on a mat' },
    level: 'Advanced',
    href: 'https://docs.google.com/document/d/1g2miut3859omG3CKBe3e3dNfWwJU9Ce7qRf4B2jpMqQ/edit?usp=sharing',
  },
];