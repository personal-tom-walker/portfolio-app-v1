'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { infoCardProjects } from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import HomeButton from '../NavButtons/Home/HomeLeft';

import ConnectedCirclesDescendingScale from '../ConnectedCirclesDescendingScale';
import InfoCard from '../InfoCard';

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
      <nav className='flex h-20 pt-9 pl-5 pr-5'>
        <HomeButton onClick={triggerNavClick} navClick={navClick} />
      </nav>
      <main className='main mt-10 overflow-y-scroll mr-[-20px]'>
        <div className='relative flex z-[-10]'>
          <ConnectedCirclesDescendingScale
            letter={infoCardProjects[activeIndex].letter}
          />
        </div>
        <div className='flex flex-col mt-[-350px]'>
          <div className='mr-[20px]'>
            <div
              role='button'
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0
                    ? infoCardProjects.length - 1
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
            <InfoCard content={infoCardProjects[activeIndex]} />
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
                className='w-fit mt-2 rotate-180'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
