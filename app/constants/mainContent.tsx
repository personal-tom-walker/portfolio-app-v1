export const mainContentHome = {
  title: 'Tom Walker',
  subtitle: 'Software Engineer',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commod ligula eget dolor. Aenean massa.',
};

export const mainContentAbout = {
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
};

export const mainContentExperience = [
  {
    role: 'FE Engineer',
    company: 'BrewBroker',
    link: 'https://brewbroker.com',
    dateRange: 'Dec 2021 - Aug 2023',
    Description: () => {
      return (
        <p>
          <span className='font-bold'>
            {
              'Lead/Sole FE Engineer (08/2022 - 08/2023) & Technical Product Management (01/2023 - 08/2023).'
            }
          </span>
          {
            ' Included: Liaison in Design Process (with Product Owner & Designer), FE Feature Development (inc. use of Data Vis. libraries - vx), User/Usability Testing & Error Handling, Sprint Planning (with Product Owner), Writing Technical Specifications (FE & BE), Input in Strategic Business Planning.'
          }
        </p>
      );
    },
  },
  {
    role: 'Managing Co-Director & Co-Founder',
    company: 'VeenPool',
    link: 'https://veenpool.co.uk',
    dateRange: 'Oct 2019 - Nov 2021',
    Description: (): JSX.Element => {
      return (
        <p>
          {
            'Main Roles & Responsibilities: Web Development (Primarily Wordpress & Elementor, regular use of custom CSS), Web Deployment (SiteGround & other cPanel environments, manual site transfer, FTP, SSH Protocol inc. DB transfer), Web Maintenance (updates, conflict resolution), Audits (GTMetrix interpretation) & Page-Speed Optimisation, Business Management (financial planning & cashflow forecasting, business strategy, admin, workflow management etc.), Business Accounting, Client Relationship Management, Sales & Marketing (inc. marketing strategy, SEO and Google Ads).'
          }
        </p>
      );
    },
  },
];
