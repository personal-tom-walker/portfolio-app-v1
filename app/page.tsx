'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentHome } from './constants/mainContent';
import { buttonTypes } from './constants/global';

import ConnectedCirclesDescendingScale from './components/ConnectedCirclesDescendingScale';
import MainContent from './components/MainContent';

export default function Home() {
  const router = useRouter();
  const [navClick, setNavClick] = useState({
    projects: false,
    about: false,
    experience: false,
  });
  const triggerNavClick = (type : string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(type !== buttonTypes.home ? `/${type}` : '/');
  };

  return (
    <>
      <header className='flex h-20 pt-9 pl-10 pr-5 justify-end'>
        <div className='flex items-end w-[137px]'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.projects)}
            className='button'
          >
            <span className='button-text w-[100px]'>
              {buttonTypes.projects}
            </span>
            <div
              className={`button-line-horizontal ${
                navClick.projects ? 'w-10' : 'w-5'
              }`}
            ></div>
          </div>
        </div>
      </header>
      <main className='flex flex-col items-end overflow-hidden pb-5 px-10'>
        <div className='relative flex'>
          <ConnectedCirclesDescendingScale letter={'T'} />
        </div>
        <div className='flex mt-[-160px]'>
          <MainContent content={mainContentHome} />
        </div>
      </main>
      <footer className='w-full h-20 flex justify-between pb-5 px-10'>
        <div className='w-[100px]'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.about)}
            className='button'
          >
            <span className='button-text w-[70px]'>{buttonTypes.about}</span>
            <div
              className={`button-line-vertical-short ml-[-6px] ${
                navClick.about ? 'h-5' : 'h-[10px]'
              }`}
            ></div>
          </div>
        </div>
        <div className='w-[120px]'>
          <div
            role='button'
            onClick={() => triggerNavClick(buttonTypes.experience)}
            className='button'
          >
            <span className='button-text w-[120px]'>
              {buttonTypes.experience}
            </span>
            <div
              className={`button-line-vertical-long ml-[-2px] ${
                navClick.experience ? 'h-10' : 'h-5'
              }`}
            ></div>
          </div>
        </div>
      </footer>
    </>
  );
}
