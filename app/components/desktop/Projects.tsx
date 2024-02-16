'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  titleContentProjects,
  infoCardProjects,
} from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import HomeButton from '../buttons/Home';

import InfoCard from '../InfoCard';
import Footer from './Footer';

import ProjectsBg from '../../../public/projects-hero-v2.jpg';
import MainContent from '../MainContent';

export default function Projects() {
  const router = useRouter();

  const [navClick, setNavClick] = useState({
    home: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(type !== buttonTypes.home ? `/${type}` : '/');
  };

  return (
    <>
      <div
        className='absolute w-full h-screen bg-no-repeat bg-left-top -z-10'
        style={{ backgroundImage: `url(${ProjectsBg.src})` }}
      ></div>
      <div className='projects-overlay'></div>
      <main className='main mt-10'>
        <div className='flex flex-col w-1/2'>
          <div className='flex flex-col w-2/3 gap-16'>
            <MainContent content={titleContentProjects} />
            <nav className='flex h-16'>
              <HomeButton onClick={triggerNavClick} navClick={navClick} />
            </nav>
          </div>
        </div>
        <div className='flex flex-col w-1/2'>
          <div className='flex flex-col'>
            {activeIndex !== 0 && (
              <div
                role='button'
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0
                      ? infoCardProjects.length - 1
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
            )}
            <InfoCard content={infoCardProjects[activeIndex]} />
            <div className='my-5'></div>
            <InfoCard content={infoCardProjects[activeIndex + 1]} />
            {infoCardProjects.length !== activeIndex + 2 && (
              <div
                role='button'
                onClick={() =>
                  setActiveIndex(
                    activeIndex === infoCardProjects.length - 1
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
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
