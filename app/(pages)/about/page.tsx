'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentAbout } from '../../constants/mainContent';
import { buttonTypes } from '../../constants/global';

import ConnectedCirclesDescendingScale from '../../components/ConnectedCirclesDescendingScale';
import MainContent from '../../components/MainContent';

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
      <header className='flex h-20 pt-5 pl-10 pr-5 justify-between'>
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
                  navClick.home ? 'h-5' : 'h-[10px]'
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className='flex items-end w-[137px] pt-4'>
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
      </header>
      <main className='main'>
        <div className='relative flex'>
          <ConnectedCirclesDescendingScale isImg={true} />
        </div>
        <div className='flex mt-[-180px]'>
          <MainContent content={mainContentAbout} />
        </div>
      </main>
      <footer className='w-full h-20 flex pb-5 px-10'>
        <div className='w-[120px]'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.experience)}
            className='button'
          >
            <span className='button-text text-right w-[120px]'>
              {buttonTypes.experience}
            </span>
            <div
              className={`button-line-vertical-long ml-[-2px] ${
                navClick.experience ? 'h-5' : 'h-[10px]'
              }`}
            ></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
