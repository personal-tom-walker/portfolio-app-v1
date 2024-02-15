'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { mainContentHome } from '@/app/constants/mainContent';
import { buttonTypes } from '@/app/constants/global';

import ProjectsButton from '../buttons/projects';
import ConnectedCirclesDescendingScale from '../ConnectedCirclesDescendingScale';
import MainContent from '../MainContent';

const Home = () => {
  const router = useRouter();
  const [navClick, setNavClick] = useState({
    projects: false,
    about: false,
    experience: false,
  });
  const triggerNavClick = (type: string) => {
    setNavClick({ ...navClick, [type]: true });
    router.push(type !== buttonTypes.home ? `/${type}` : '/');
  };
  return (
    <>
      <ProjectsButton onClick={triggerNavClick} navClick={navClick} />
      <main className='main justify-end border-white border'>
        <div className='relative flex'>
          <ConnectedCirclesDescendingScale isHome={true} letter={'T'} />
        </div>
        <div className='flex mt-[-180px]'>
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
            <span className='button-text text-right w-[70px]'>
              {buttonTypes.about}
            </span>
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
            <span className='button-text text-right w-[120px]'>
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
};

export default Home;
