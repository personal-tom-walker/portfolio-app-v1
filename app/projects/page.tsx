'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentProjects } from '../constants/mainContent';
import { buttonTypes } from '../constants/global';

import ConnectedCirclesDescendingScale from '../components/ConnectedCirclesDescendingScale';
import InfoCard from '../components/InfoCard';

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
      <header className='flex h-20 pt-9 pl-5 pr-5'>
        <div className='flex items-end w-[100px]'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.home)}
            className='button justify-end'
          >
            <div className='flex w-10 justify-end'>
              <div
                className={`button-line-horizontal mr-[-1px] ${
                  navClick.home ? 'w-10' : 'w-5'
                }`}
              ></div>
            </div>
            <span className='button-text text-right w-fit'>
              {buttonTypes.home}
            </span>
          </div>
        </div>
      </header>
      <main className='main mt-10'>
        <div className='relative flex'>
          <ConnectedCirclesDescendingScale
            letter={mainContentProjects[activeIndex].letter}
          />
        </div>
        <div className='flex flex-col mt-[-320px]'>
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
      </main>
      <footer className='w-full h-20 flex justify-between pb-5 px-10'></footer>
    </>
  );
}
