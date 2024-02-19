'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentAbout } from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import ProjectsButton from '../NavButtons/Projects/Projects';
import HomeButton from '../NavButtons/Home/HomeUp';
import ExperienceButton from '../NavButtons/Experience/Experience';

import ConnectedCirclesDescendingScale from '../../components/ConnectedCirclesDescendingScale';
import MainContent from '../../components/MainContent';
import Footer from './Footer';

const About = () => {
  const router = useRouter();
  const [navClick, setNavClick] = useState({
    home: false,
    projects: false,
    experience: false,
  });

  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(type !== buttonTypes.home ? `/${type}` : '/');
  };

  return (
    <>
      <main className='main justify-end'>
        <div className='flex pl-48 items-end'>
          <div className='w-1/2'>
            <ConnectedCirclesDescendingScale isImg={true} />
          </div>
          <div className='flex flex-col w-1/2 gap-16'>
            <MainContent content={mainContentAbout} />
            <nav className='w-full h-16 flex justify-between'>
              <div className='flex'>
                <HomeButton
                  onClick={triggerNavClick}
                  navClick={navClick}
                  isLong={false}
                  isTop={true}
                />
                <ExperienceButton
                  onClick={triggerNavClick}
                  navClick={navClick}
                  isLong={false}
                />
              </div>
              <div>
                <ProjectsButton onClick={triggerNavClick} navClick={navClick} />
              </div>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
