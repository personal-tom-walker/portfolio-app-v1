export const PROFESSIONAL_EMAIL = 'walkertom1996@gmail.com';

import { LINKEDIN, GITHUB } from './externalLinks';

const TECHNOLOGY_NAMES = {
  WORDPRESS: 'WordPress',
  ELEMENTOR: 'Elementor',
  CSS: 'CSS',
  BOOTSTRAP_CSS: 'BootstrapCSS',
  TAILWIND_CSS: 'TailwindCSS',
  JAVASCRIPT: 'JavaScript',
  REACT: 'React',
  NEXT: 'NextJS',
  REDUX: 'Redux',
  STRIPE_API: 'StripeAPI',
  CIRCLE_CI: 'CircleCI',
  GITHUB: 'GitHub',
  HEROKU: 'Heroku',
  VERCEL: 'Vercel',
  SITEGROUND: 'SiteGround',
};

export const technologies = {
  wordpress: {
    name: TECHNOLOGY_NAMES.WORDPRESS,
    link: 'https://wordpress.com',
  },
  elementor: {
    name: TECHNOLOGY_NAMES.ELEMENTOR,
    link: 'https://elementor.com',
  },
  css: {
    name: TECHNOLOGY_NAMES.CSS,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  bootstrapCSS: {
    name: TECHNOLOGY_NAMES.BOOTSTRAP_CSS,
    link: 'https://getbootstrap.com',
  },
  tailwindCSS: {
    name: TECHNOLOGY_NAMES.TAILWIND_CSS,
    link: 'https://tailwindcss.com',
  },
  javascript: {
    name: TECHNOLOGY_NAMES.JAVASCRIPT,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  react: {
    name: TECHNOLOGY_NAMES.REACT,
    link: 'https://react.dev',
  },
  next: {
    name: TECHNOLOGY_NAMES.NEXT,
    link: 'https://nextjs.org',
  },
  redux: {
    name: TECHNOLOGY_NAMES.REDUX,
    link: 'https://redux.js.org',
  },
  stripe: {
    name: TECHNOLOGY_NAMES.STRIPE_API,
    link: 'https://stripe.com/docs/api',
  },
  circleCI: {
    name: TECHNOLOGY_NAMES.CIRCLE_CI,
    link: 'https://circleci.com',
  },
  github: {
    name: TECHNOLOGY_NAMES.GITHUB,
    personalLink: 'https://github.com/Pillroy',
    brewbrokerLink: 'https://github.com/brewbrokertom',
  },
  heroku: {
    name: TECHNOLOGY_NAMES.HEROKU,
    link: 'https://www.heroku.com',
  },
  vercel: {
    name: TECHNOLOGY_NAMES.VERCEL,
    link: 'https://vercel.com',
  },
  siteground: {
    name: TECHNOLOGY_NAMES.SITEGROUND,
    link: 'https://www.siteground.co.uk',
  },
};

export const breakpoints = {
  desktop: 1024,
  tablet: 768,
};

export const buttonTypes = {
  home: 'home',
  projects: 'projects',
  about: 'about',
  experience: 'experience',
};

export const socials = [
  {
    name: 'LinkedIn',
    img: '/linkedin-icon-white.svg',
    link: LINKEDIN,
  },
  {
    name: 'GitHub',
    img: '/github-icon-white.svg',
    link: GITHUB,
  },
];
