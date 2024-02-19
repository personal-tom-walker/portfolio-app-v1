'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentHome } from '@/app/constants/mainContent';
import { buttonTypes } from '@/app/constants/global';

import ProjectsButton from '../NavButtons/Projects/Projects';
import AboutButton from '../NavButtons/About/AboutDown';
import ExperienceButton from '../NavButtons/Experience/Experience';

import MainContent from '../MainContent';
import Footer from './Footer';

import HomeBg from '../../../public/home-hero-v2-1440-1024.jpg';

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
      <div
        className='absolute w-full h-screen bg-cover bg-no-repeat bg-right-top -z-10'
        style={{ backgroundImage: `url(${HomeBg.src})` }}
      ></div>
      <main className='main justify-end'>
        <div className='flex flex-col w-1/2 gap-16'>
          <MainContent content={mainContentHome} />
          <nav className='w-full h-16 flex justify-between'>
            <div className='flex'>
              <AboutButton onClick={triggerNavClick} navClick={navClick} />
              <ExperienceButton onClick={triggerNavClick} navClick={navClick} isLong={true} />
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
