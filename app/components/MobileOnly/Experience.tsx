'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { infoCardExperience } from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import HomeUp from '../NavButtons/Home/HomeUp';
import AboutUp from '../NavButtons/About/AboutUp';
import ProjectsButton from '../NavButtons/Projects/Projects';

import ConnectedCirclesDescendingScale from '../../components/ConnectedCirclesDescendingScale';
import InfoCard from '../../components/InfoCard';

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
      <nav className='flex h-20 pt-10 pl-10 pr-5 justify-between'>
        <HomeUp
          onClick={triggerNavClick}
          navClick={navClick}
          isLong={true}
          isTop={false}
        />
        <AboutUp onClick={triggerNavClick} navClick={navClick} />
      </nav>
      <main className='main mt-10 overflow-y-scroll'>
        <div className='relative flex z-[-10]'>
          <ConnectedCirclesDescendingScale
            letter={infoCardExperience[activeIndex].letter}
          />
        </div>
        <div className='flex flex-col mt-[-350px]'>
          <div
            role='button'
            onClick={() =>
              setActiveIndex(
                activeIndex === 0
                  ? infoCardExperience.length - 1
                  : activeIndex - 1
              )
            }
            className='w-fit mb-2'
          >
            <Image
              src={'/blue-arrow.svg'}
              alt='arrow up'
              height={25}
              width={18}
            />
          </div>
          <InfoCard content={infoCardExperience[activeIndex]} />
          <div
            role='button'
            onClick={() =>
              setActiveIndex(
                activeIndex === infoCardExperience.length - 1
                  ? 0
                  : activeIndex + 1
              )
            }
          >
            <Image
              src={'/blue-arrow.svg'}
              alt='arrow up'
              height={25}
              width={18}
              className='w-fit mt-2 rotate-180'
            />
          </div>
        </div>
      </main>
      <footer className='w-full h-20 flex justify-end pb-5 pl-10 pr-5'>
        <ProjectsButton onClick={triggerNavClick} navClick={navClick} />
      </footer>
    </>
  );
};

export default Experience;
