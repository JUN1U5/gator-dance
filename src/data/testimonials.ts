import type { Testimonial } from '../types';

// Testimonials from students or others. Fields include `quote`, `name`, `role`, and an `image` object with `src` and `alt` strings.
export const testimonials: Testimonial[] = [
  {
    quote:
      'I took Dance III to not only grow my academic dance knowledge, but to also help strengthen myself as a dancer. I have been dancing for eleven years, and this class still taught me something new every day.',
    name: 'Cami Mathews',
    role: 'Class of 2022',
    image: { src: '/images/GLHS_Dance_2026-31_P.jpg', alt: 'A row of dancers backlit in green on stage' },
  },
  {
    quote:
      'The supportive environment is a great space to create and share ideas. I love finding new ways to explore movement in the studio, especially through improv and building choreography with my friends.',
    name: 'Dianne Celemen',
    role: 'Class of 2022',
    image: { src: '/images/dance-teal2.jpg', alt: 'Students leaning toward one another in a formation on stage' },
  },
  {
    quote:
      '[I learned] new dance forms and different techniques along with how to really feel the history of dance when you are working on those steps. I got to incorporate my dance background in the concert last year and that just goes to show how inclusive this class is! ',
    name: 'Urvi Maitra',
    role: 'Class of 2022',
    image: { src: '/images/dance-overshoulder.jpg', alt: 'Two dancers look out into the audience during rehearsel' },
  },
];
