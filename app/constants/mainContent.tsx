import { technologies } from './global';

export const mainContentHome = {
  title: 'Tom Walker',
  subtitle: 'Software Developer',
  text: 'Full Stack Ability | Front End Specialist',
  isBold: true,
};

export const mainContentAbout = {
  text: "Hey, here's a bit about me... I've been developing technical web-based technical solutions for the commercial world for over 4 years now. Though most the technologies I currently use (and continue to learn) are self-taught, I've had formal training via School of Code (2021). Feel free to explore my experience and past projects :)",
  isBold: true,
};

export const infoCardExperience = [
  {
    letter: 'F',
    company: 'Freelance',
    link: '/',
    dateRange: 'Sep 2023 - Feb 2024',
    boldText:
      'Software Consultancy, Solution Architecture, FE Design, Full Stack Development, Deployment, Client Management',
    normalText:
      'Despite having years of experience working (and enjoying working!) in interdisciplinary teams, recent Freelance opportunities have allowed me to test myself full-scope in technical solution delivery. Explore my projects to see more',
  },
  {
    letter: 'B',
    role: 'FE Engineer',
    company: 'BrewBroker',
    link: 'https://brewbroker.com',
    dateRange: 'Dec 2021 - Aug 2023',
    boldText:
      'Lead/Sole FE Engineer (08/2022 - 08/2023) & Technical Product Management (01/2023 - 08/2023)',
    normalText:
      'Included: Liaison in Design Process (with Product Owner & Designer), FE Feature Development (inc. use of Data Vis. libraries - vx), User/Usability Testing & Error Handling, Sprint Planning (with Product Owner), Writing Technical Specifications (FE & BE), Input in Strategic Business Planning',
  },
  {
    letter: 'S',
    role: 'Student',
    company: 'School of Code',
    link: 'https://www.schoolofcode.co.uk',
    dateRange: 'Mar 2021 - Sep 2021',
    boldText: 'Bootcamp 6 Student on Front End Development Course',
    normalText:
      'Initial exposure to React. Course covered JavaScript fundamentals and two React-based projects. A fun, engaging, well-administered course that gave me confidence and backing to further my journey in the technology space',
  },
  {
    letter: 'V',
    role: 'Managing Co-Director & Co-Founder',
    company: 'VeenPool',
    link: 'https://veenpool.co.uk',
    dateRange: 'Oct 2019 - Nov 2021',
    boldText:
      'Wearing a million hats',
    normalText:
      'Main Roles & Responsibilities: Web Development (Primarily Wordpress & Elementor, regular use of custom CSS), Web Deployment (SiteGround & other cPanel environments, manual site transfer, FTP, SSH Protocol inc. DB transfer), Web Maintenance (updates, conflict resolution), Audits (GTMetrix interpretation) & Page-Speed Optimisation, Business Management (financial planning & cashflow forecasting, business strategy, admin, workflow management etc.), Business Accounting, Client Relationship Management, Sales & Marketing (inc. marketing strategy, SEO and Google Ads)',
  },
];

export const titleContentProjects = {
  subtitle: 'Projects',
  text: 'Explore my completed projects. Where available, click to open the homepage of each project in a new tab',
};

export const infoCardProjects = [
  {
    letter: 'P',
    company: 'Portfolio',
    link: '/',
    dateRange: 'Dec 2023 - Feb 2024',
    boldText: 'Portfolio site (v1)',
    normalText: 'Everything you see here! :)',
    technologies: [
      technologies.next,
      technologies.react,
      technologies.tailwindCSS,
      technologies.typescript,
    ],
    ownDesign: true,
  },

  {
    letter: 'N',
    company: 'Non-Established Company',
    link: null,
    dateRange: 'Dec 2023 - Feb 2024',
    boldText:
      'Software Consultancy, Solution Architecture, FE Design, Full Stack Development, Deployment, Client Management',
    normalText:
      'Software solution consultancy from problem outline for a budding start up. Full solution implementation including custom scripting in ExtendScript (for Adobe After Effects), alongside purpose-built web application in NextJS, leveraging NextAuth and Vercel PostgreSQL',
    technologies: [
      technologies.next,
      technologies.react,
      technologies.tailwindCSS,
      technologies.typescript,
      technologies.extendScript,
      technologies.sql,
      technologies.vercel,
    ],
    ownDesign: true,
  },
  {
    letter: 'L',
    company: 'Lost Dream Studio',
    link: 'https://lostdreamstudio.com',
    dateRange: 'Sep 2023 - Oct 2023',
    boldText: 'Full service web-design & development',
    normalText:
      'Included: Discovery, Design, Build in WordPress with GeneratePress, ElementorPro & Custom Scripts to Requirements, Site-Speed Optimisation, GA4 setup, Branded Email Design & Development & Testing',
    technologies: [
      technologies.wordpress,
      technologies.elementor,
      technologies.css,
      technologies.javascript,
    ],
    ownDesign: true,
  },
  {
    letter: 'B',
    company: 'BrewBroker',
    link: 'https://brewbroker.com',
    dateRange: 'Dec 2021 - Aug 2023',
    boldText: 'First commercial involvement in a React project',
    normalText:
      'Rebuilt entire Front End whilst there. Key work included development of a renewed onboarding flow, subscription feature with Stripe integration, graphical data representation via vx library, input during ambitious data integration work with PintPlease (beer consumer-ratings app with nearly 6 million reviews). WordPress (logged-out) and React (logged-in)',
    technologies: [
      technologies.react,
      technologies.redux,
      technologies.bootstrapCSS,
      technologies.javascript,
      technologies.express,
      technologies.nodejs,
      technologies.stripe,
      technologies.circleCI,
      technologies.heroku,
      technologies.wordpress,
      technologies.elementor,
      technologies.css,
    ],
  },
  {
    letter: 'W',
    company: 'The Whisky Merchants',
    link: 'https://thewhiskymerchants.com/',
    dateRange: 'Dec 2020 - Mar 2021',
    boldText:
      'Business Strategy, Development, Client Management, SEO, eCommerce',
    normalText:
      'A project start-up, closely working alongside a trusted client. Full service involvement from both myself and my business partner. Good to see the site still going strong!',
    technologies: [
      technologies.wordpress,
      technologies.elementor,
      technologies.woocommerce,
      technologies.css,
      technologies.javascript,
    ],
  },
  {
    letter: 'S',
    company: 'Specialist Vehicle Rental',
    link: 'https://specialistvehiclerental.co.uk',
    dateRange: 'Mar 2020 - Jun 2020',
    boldText:
      'Development, Client Management, Full Web Accessibility Audit & Adherence',
    normalText:
      'One of the earliest sites produced alongside my Co-Founder at VeenPool; designed by said colleague and built by me. Weird looking all the way back at this one!',
    technologies: [
      technologies.wordpress,
      technologies.elementor,
      technologies.css,
      technologies.javascript,
    ],
  },
];
