'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { infoCardExperience } from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import HomeUp from '../NavButtons/Home/HomeUp';
import AboutUp from '../NavButtons/About/AboutUp';
import ProjectsButton from '../NavButtons/Projects/Projects';

import CircleLineElement from '../CircleLineElement';
import InfoCard from '../../components/InfoCard';
import Footer from './Footer';

const Experience = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [navClick, setNavClick] = useState({
    home: false,
    about: false,
    projects: false,
  });

  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(type !== buttonTypes.home ? `/${type}` : '/');
  };

  return (
    <>
      <main className='main'>
        <div className='flex pl-48 h-full'>
          <div className='flex w-1/2 items-center justify-center'>
            <div className='w-[243px]'>
              {infoCardExperience.map((item, index) => {
                const { letter } = item;
                return (
                  <CircleLineElement
                    key={index}
                    index={index}
                    letter={letter}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                );
              })}
            </div>
          </div>
          <div className='flex flex-col w-1/2 gap-16 justify-end'>
            <div className='flex flex-col'>
              <InfoCard content={infoCardExperience[activeIndex]} />
            </div>
            <nav className='w-full h-16 flex justify-between'>
              <div className='flex'>
                <HomeUp
                  onClick={triggerNavClick}
                  navClick={navClick}
                  isLong={true}
                />
                <AboutUp onClick={triggerNavClick} navClick={navClick} />
              </div>
              <div className='flex items-end'>
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

export default Experience;
