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
import Footer from './Footer';

const Experience = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [navClick, setNavClick] = useState({
    home: false,
    about: false,
    projects: false,
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
      <main className='main justify-end'>
        <div className='flex pl-48 items-end'>
          <div className='w-1/2'>
            <ConnectedCirclesDescendingScale
              letter={infoCardExperience[activeIndex].letter}
            />
          </div>
          <div className='flex flex-col w-1/2 gap-16'>
            <div className='flex flex-col mt-[-320px]'>
              <div
                role='button'
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0
                      ? infoCardExperience.length - 1
                      : activeIndex - 1
                  )
                }
                className='w-fit mb-4'
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
                  className='w-fit mt-4 rotate-180'
                />
              </div>
            </div>
            <nav className='w-full h-16 flex justify-between'>
              <div className='flex'>
                <HomeUp
                  onClick={triggerNavClick}
                  navClick={navClick}
                  isLong={true}
                />
                <AboutUp
                  onClick={triggerNavClick}
                  navClick={navClick}
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

export default Experience;
