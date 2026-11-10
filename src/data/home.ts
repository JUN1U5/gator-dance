import type { CallToAction, FocusArea, GalleryImage, HeroWord, ImageData, VisitStep } from '../types';

/**
 * Copy and images for the home-page sections.
 * Lists (classes, schedule, coaches, pricing, …) live in their own files.
 * A `\n` inside a title becomes a line break.
 */

export const hero = {
  /** Words of the display headline, separated by the animated slashes. */
  title: [{ text: 'Green Level', serif:false }, { text: 'Dance', serif:false }] satisfies HeroWord[],
  description:
    'The Green Level Dance Department is a program that offers beginning-advance level dance classes during the school day as a fine arts credit. Our program focuses on teaching Ballet, Modern/Contemporary, Jazz, Tap, and Choreography. .',
  cta: { label: 'Become a Booster!', href: '/boosters' } satisfies CallToAction,
  image: { src: '/images/dance-blue.webp', alt: 'Green Level High School dancers perform on stage against a blue backdrop' } satisfies ImageData,
  proof: {
    label: 'Practicing with us',
    value: '30,000+ Members',
    avatars: [
      { src: '/images/avatar-01.webp', alt: '' },
      { src: '/images/avatar-02.webp', alt: '' },
      { src: '/images/avatar-03.webp', alt: '' },
    ] satisfies ImageData[],
  },
};

export const approach = {
  title: 'About the Program',
  intro:
    'The Green Level Dance Department is a program that offers beginning-advance level dance classes during the school day as a fine arts credit.',
 content: {
    title: "Our Director",
    text: "My name is Andrea Dula and I am the dance teacher and Dance Team Coach at Green Level High School. I am from Raleigh, North Carolina and I have been dancing since the age of three. I am trained in modern, contemporary, ballet, hip hop, and jazz. I graduated from Meredith College with a Bachelor of Arts in Dance Education with a K-12 licensure. I currently still dance in a company and I love performing! I am excited to be a director of this program and I can’t wait to dance with everyone!",
    image: { 
      src: '/images/dula-headshot.jpg', 
      alt: 'Program director Andrea Dula' 
    } satisfies ImageData,
    cta: { 
      label: 'A note for parents', 
      href: '/blog/note-to-parents/' 
    } satisfies CallToAction,
  },
detail: {
    title: 'About Our Department',
    text: 'The Green Level Dance Department is a program that offers beginning-advance level dance classes during the school day as a fine arts credit. Our program focuses on teaching Ballet, Modern/Contemporary, Jazz, Tap, and Choreography. We have one concert each semester filled with both student and teacher choreography from all genres.',
    image: {
      src: '/images/dance-teal.jpg',
      alt: 'Students gathered together at the venue'
    },
  }
};


export const classesSection = {
  title: 'Core Classes',
  intro:
    'In the dance program at Green Level, we learn many different dance genres, such as ballet, jazz, modern, contemporary, tap, and other world genres, along with dance history, dance vocabulary, and dance kinesiology.',
  //cta: { label: 'More Information', href: '/info' } satisfies CallToAction,
};

export const danceTeam = {
  title: 'Green Level Dance Team',
  intro:
    'Here at Green Level High School, the dance team falls under the direction of the Athletic Program. We are a five genre dance team (jazz, pom, kick, hip hop, and contemporary) that competes each summer against dance teams across the state.  The team provides school spirit to the Green Level Community by dancing on the sidelines, performing at games, and dancing at community events. Highlights include 4 superior trophies, 11 current All American Dancers, 2nd place in Large Varsity Jazz, multiple Bids to the National Dance Team Championship in Orlando, Florida, and ranking top 30 in the nation at NDTC. We are extremely proud to represent Green Level High School and continue creating a strong legacy in our community. ',
  image: { src: '/images/Dance-Team-Camp.jpg', alt: 'The Green Level High School Dance Team showing off their award at UDA camp' },
  cta: { label: 'Tryouts', href: '/blog/tryouts' } satisfies CallToAction,
}

export const focus = {
  title: 'Poses Shaped Around You',
  intro:
    'Our coaches bring years of teaching to every session, adjusting each pose to your comfort, mobility and pace.',
  image: { src: '/images/focus-seated.webp', alt: 'Woman seated cross-legged on a mat in the dunes, facing the sea with her back to the camera' } satisfies ImageData,
  /** Index of the area that is active on page load. */
  initial: 1,
  areas: [
    {
      title: 'Release Your Neck',
      description: 'Slow neck rolls and gentle side stretches melt the tension that builds up after long hours at a screen.',
      spot: 'Neck',
      x: '58%',
      y: '37%',
    },
    {
      title: 'Open Your Shoulders',
      description: 'Heart-opening poses counter hunched posture, widen the chest and make every breath feel fuller.',
      spot: 'Shoulders',
      x: '72%',
      y: '46%',
    },
    {
      title: 'Lengthen Your Spine',
      description: 'Seated twists and folds create space between the vertebrae, easing lower back pain and improving mobility.',
      spot: 'Spine',
      x: '57%',
      y: '66%',
    },
  ] satisfies FocusArea[],
};

export const scheduleSection = {
  title: 'Upcoming Dance Events',
  intro: 'Tickets for upcoming events are available on our Ludus page. Click TICKETS to view availability and payment. Follow us on Instagram for additional announcements and events.',
  note: 'For GLHS shows, please show your electronic ticket upon entering the auditorium. These are cashless events. Per WCPSS, the clear bag policy is in effect for all public events.',
  reserveLabel: 'Tickets',
};

export const sponsorsSection = {
  title: 'Thank You, Sponsors!',
  intro:
    'Our patrons and sponsors make dance possible for our high school dancers.',
  cta: { label: 'Become a Sponsor', href: '/boosters' } satisfies CallToAction,
};

export const program = {
  title: 'About Our Program',
  intro: 'The Green Level Dance Department is a program that offers beginning-advance level dance classes during the school day as a fine arts credit. Our program focuses on teaching Ballet, Modern/Contemporary, Jazz, Tap, and Choreography. We have one concert each semester filled with both student and teacher choreography from all genres.',
  cta: { label: 'Register', href: '/#register' } satisfies CallToAction,
};

export const teacher = {
  title: 'Meet Our Director',
  subTitle: "Meet Ms. Andrea Dula",
  intro: 'My name is Andrea Dula and I am the dance teacher and Dance Team Coach at Green Level High School. I am from Raleigh, North Carolina and I have been dancing since the age of three. I am trained in modern, contemporary, ballet, hip hop, and jazz. I graduated from Meredith College with a Bachelor of Arts in Dance Education with a K-12 licensure. I currently still dance in a company and I love performing! I am excited to be a director of this program and I can’t wait to dance with everyone!',
  image: { src: '/images/dula-headshot.jpg', alt: 'Andrea Dula, head of the dance department' },
  cta: { label: 'Welcome from Ms. Dula', href: '/blog/note-to-parents/' } satisfies CallToAction,
};

export const pricingSection = {
  title: 'Memberships That Fit',
  intro: 'No joining fees and no long contracts. Pause or cancel anytime from your account.',
};

export const storiesSection = {
  title: 'The Arts Are Essential',
  intro: 'Dance offers valuable benefits in leadership, creative expression, and being part of something bigger.',
};

export const gallery = {
  title: 'In the Studio, Across the Floor',
  intro: 'Inside the studio, snapshots from our community.',
  images: [
    { src: '/images/dance-team.jpg', alt: 'The Green Level High School Dance Team on the football field at night', caption: 'Dance Team @gl_danceteam' },
    { src: '/images/Dance_IMG_3235_L.JPG', alt: 'Dancers pose on stage for the 2025 Spring Concert, entitled FLUX', caption: 'FLUX (Spring Concert)' },
    { src: '/images/GLHS_Dance_2026-249_L.jpg', alt: 'Silhouette of dancers posing on stage at the Spring Concert', caption: 'FLUX Solo' },
    { src: '/images/GLHS_Dance_2026-38_P.jpg', alt: 'Dancers leaping across the stage', caption: 'Dance' },
  ] satisfies GalleryImage[],
  note: 'Share your practice and tag us to be featured here.',
  /** Link shown in the note card. Uses the first social link labelled "Instagram" if present. */
  noteLinkLabel: 'Follow @g_l_dance',
};

export const retreatsSection = {
  title: 'Core Classes',
  intro: 'Welcome to dance class. In this class, we will learn many different dance genres such as ballet, jazz, modern, contemporary, tap, and other world genres, along with dance history, dance vocabulary, and dance kinesiology.',
  cta: { label: 'More Class Info', href: '/info' } satisfies CallToAction,
};

export const faqSection = {
  title: 'Common Questions',
  intro: 'Questions about the dance program? Here are some common topics, with everything you need to know. Please feel free to reach out with any questions.',
  cta: { label: 'Contact Ms. Dula', href: '/contact' } satisfies CallToAction,
};

export const journalSection = {
  title: 'Resources for Students and Families',
  intro: 'Practical notes and resources for students, dancers, and family members.',
  cta: { label: 'All Resources', href: '/blog' } satisfies CallToAction,
};

export const newsletter = {
  title: 'A Calmer Inbox, Once a Week',
  intro:
    'One short practice, one breathing tip and first access to retreat spots every Sunday morning. Unsubscribe anytime.',
  placeholder: 'Your email address',
  buttonLabel: 'Subscribe',
};

export const cta = {
  /** `{lotus}` renders the small lotus chip. The Mat Is Where\nChange {lotus} Begins',*/
  title: 'Green Level Dancers\nNeed Your Support',
  intro: 'Invest in the future of the arts and our Green Level dancers!',
  button: { label: 'Become a Booster!', href: '/booster' } satisfies CallToAction,
  contactLabel: 'Get in touch with us',
  image: { src: '/images/Dance_IMG_3235_L.JPG', alt: '' } satisfies ImageData,
  marquee: { before: 'Dance,', emphasis: 'Dance' },
};

// /images/dance-teal.jpg

export const visit = {
  title: 'Become a Dance Booster',
  intro:
    'You can support the arts at Green Level through one-off donations, memberships, and corporate sponsorships.',
  cta2: { label: 'Donate Now', href: "https://glhsdance.ludus.com/donate"},
  cta: { label: 'Email Us', href: 'mailto:danceadmin@glhsvad.org' } satisfies CallToAction,
  steps: [
    { title: 'Charitable Tax Deduction', icon: 'gift', description: 'We are a 501(c)(3) organization, and your donation is tax deductible.' },
    { title: 'Local Advertising', icon: 'focus', description: 'Business sponsors can reach the local community by advertising in our concert programs, website, and social media.' },
    { title: 'Support Students', icon: 'cap', description: 'By helping our dance program grow, you\'re supporting our students and dancers.' },
    { title: 'Support the Arts', icon: 'heart', description: 'By supporting dance at Green Level, you\'re fostering a creative outlet for students in our community' },
  ] satisfies VisitStep[],
};