'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentHome } from '@/app/constants/mainContent';
import { buttonTypes } from '@/app/constants/global';

import ProjectsButton from '../buttons/Projects';
import AboutButton from '../buttons/About';
import ExperienceButton from '../buttons/Experience';

import ConnectedCirclesDescendingScale from '../ConnectedCirclesDescendingScale';
import MainContent from '../MainContent';
import Footer from './Footer';

const Home = () => {
  const router = useRouter();
  const [navClick, setNavClick] = useState({
    projects: false,
    about: false,
    experience: false,
  });
  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(type !== buttonTypes.home ? `/${type}` : '/');
  };
  return (
    <>
      <main className='main justify-end'>
        <div className='flex flex-col w-1/2 gap-16'>
          <MainContent content={mainContentHome} />
          <nav className='w-full h-16 flex justify-between'>
            <div className='flex'>
              <AboutButton onClick={triggerNavClick} navClick={navClick} />
              <ExperienceButton onClick={triggerNavClick} navClick={navClick} />
            </div>
            <div>
              <ProjectsButton onClick={triggerNavClick} navClick={navClick} />
            </div>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
