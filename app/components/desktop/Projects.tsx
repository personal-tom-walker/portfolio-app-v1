'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentProjects } from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import HomeButton from '../buttons/Home';

import InfoCard from '../InfoCard';
import Footer from './Footer';

import ProjectsBg from '../../../public/projects-hero-v2.jpg';

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
      <div
        className='projects-overlay'
      ></div>
      <main className='main mt-10'>
        <div className='flex flex-col w-1/2'>
          <nav className='flex h-20 pt-9 pl-5 pr-5'>
            <HomeButton onClick={triggerNavClick} navClick={navClick} />
          </nav>
        </div>
        <div className='flex flex-col w-1/2'>
          <div className='flex flex-col'>
            <div
              role='button'
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0
                    ? mainContentProjects.length - 1
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
            <InfoCard content={mainContentProjects[activeIndex]} />
            <div
              role='button'
              onClick={() =>
                setActiveIndex(
                  activeIndex === mainContentProjects.length - 1
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
        </div>
      </main>
      <Footer />
    </>
  );
}
