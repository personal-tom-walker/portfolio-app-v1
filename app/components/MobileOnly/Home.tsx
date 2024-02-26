'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { mainContentHome } from '@/app/constants/mainContent';
import { buttonTypes } from '@/app/constants/global';

import ProjectsButton from '../NavButtons/Projects/Projects';
import AboutDown from '../NavButtons/About/AboutDown';
import ExperienceButton from '../NavButtons/Experience/Experience';

import ConnectedCirclesDescendingScale from '../ConnectedCirclesDescendingScale';
import MainContent from '../MainContent';

const Home = () => {
  const router = useRouter();
  const [navClick, setNavClick] = useState({
    projects: false,
    about: false,
    experience: false,
  });

  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(`/${type}`);
  };

  return (
    <>
      <nav className='flex h-20 pt-9 pl-10 pr-5 justify-end bg-transparent'>
        <ProjectsButton onClick={triggerNavClick} navClick={navClick} />
      </nav>
      <main className='main justify-end'>
        <div className='relative flex z-[-10]'>
          <ConnectedCirclesDescendingScale isHome={true} letter={'T'} />
        </div>
        <div className='flex mt-[-180px]'>
          <MainContent content={mainContentHome} />
        </div>
      </main>
      <nav className='w-full h-20 flex justify-between pb-5 px-10'>
        <AboutDown onClick={triggerNavClick} navClick={navClick} />
        <ExperienceButton
          onClick={triggerNavClick}
          navClick={navClick}
          isLong={true}
        />
      </nav>
    </>
  );
};

export default Home;
