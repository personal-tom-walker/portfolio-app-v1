'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentExperience } from '../constants/mainContent';
import { buttonTypes } from '../constants/global';

import ConnectedCirclesDescendingScale from '../components/ConnectedCirclesDescendingScale';
import InfoCard from '../components/InfoCard';

const Experience = () => {
  const router = useRouter();

  const [navClick, setNavClick] = useState({
    home: false,
    about: false,
    projects: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(type !== buttonTypes.home ? `/${type}` : '/');
  };

  return (
    <>
      <header className='flex h-20 pt-10 pl-10 pr-5 justify-between'>
        <div className='flex items-end w-[100px]'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.home)}
            className='button'
          >
            <span className='button-text text-right w-[70px] pt-4'>
              {buttonTypes.home}
            </span>
            <div className='relative flex h-[23px] ml-[-2px] items-end'>
              <div
                className={`button-line-vertical-short-up ${
                  navClick.home ? 'h-10' : 'h-5'
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className='flex items-end w-[100px]'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.about)}
            className='button'
          >
            <span className='button-text text-right w-[70px]'>
              {buttonTypes.about}
            </span>
            <div
              className={`button-line-vertical-short-up ml-[-2px] mt-[-3px] ${
                navClick.about ? 'h-5' : 'h-[10px]'
              }`}
            ></div>
          </div>
        </div>
      </header>
      <main className='main-content mt-10'>
        <div className='relative flex'>
          <ConnectedCirclesDescendingScale
            letter={mainContentExperience[activeIndex].letter}
          />
        </div>
        <div className='flex flex-col mt-[-320px]'>
          <div
            role='button'
            onClick={() =>
              setActiveIndex(
                activeIndex === 0
                  ? mainContentExperience.length - 1
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
          <InfoCard content={mainContentExperience[activeIndex]} />
          <div
            role='button'
            onClick={() =>
              setActiveIndex(
                activeIndex === mainContentExperience.length - 1
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
      <footer className='w-full h-20 flex justify-end pb-5 px-10'>
        <div className='w-[137px] pt-4'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.projects)}
            className='button'
          >
            <span className='button-text text-right w-[100px]'>
              {buttonTypes.projects}
            </span>
            <div
              className={`button-line-horizontal ml-[-3px] ${
                navClick.projects ? 'w-10' : 'w-5'
              }`}
            ></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
