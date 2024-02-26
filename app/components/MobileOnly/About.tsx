'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { mainContentAbout } from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import ProjectsButton from '../NavButtons/Projects/Projects';
import HomeButton from '../NavButtons/Home/HomeUp';
import ExperienceButton from '../NavButtons/Experience/Experience';

import ConnectedCirclesDescendingScale from '../../components/ConnectedCirclesDescendingScale';
import MainContent from '../../components/MainContent';

const About = () => {
  const router = useRouter();
  const [navClick, setNavClick] = useState({
    home: false,
    projects: false,
    experience: false,
  });
  const [selectedNav, setSelectedNav] = useState<string | null>(null);

  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    setSelectedNav(type);
  };

  useEffect(() => {
    if (selectedNav) {
      const routerTimeoutId = setTimeout(() => {
        router.push(selectedNav !== buttonTypes.home ? `/${selectedNav}` : '/');
      }, 1000);

      return () => clearTimeout(routerTimeoutId);
    }
  }, [selectedNav, router]);

  return (
    <>
      <nav className='flex h-20 pt-5 pl-10 pr-5 z-10 justify-between'>
        <HomeButton
          onClick={triggerNavClick}
          navClick={navClick}
          isLong={false}
          isTop={false}
        />
        <ProjectsButton onClick={triggerNavClick} navClick={navClick} />
      </nav>
      <main className='main'>
        <div className='relative flex z-[-10]'>
          <ConnectedCirclesDescendingScale isImg={true} />
        </div>
        <div className='flex justify-end overflow-y-scroll max-h-full mt-[-180px] mr-[-20px]'>
          <div className='mr-[20px]'>
            <MainContent content={mainContentAbout} />
          </div>
        </div>
      </main>
      <footer className='w-full h-20 flex justify-end pb-5 px-10'>
        <ExperienceButton
          onClick={triggerNavClick}
          navClick={navClick}
          isLong={false}
        />
      </footer>
    </>
  );
};

export default About;
