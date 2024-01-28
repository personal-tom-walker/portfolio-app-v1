'use client';

import { useState } from 'react';

import { mainContentHome } from './constants/mainContent';

import ConnectedCirclesDescendingScale from './components/ConnectedCirclesDescendingScale';
import MainContent from './components/MainContent';

export default function Home() {
  const [navClick, setNavClick] = useState(false);
  const triggerNavClick = () => {
    console.log('nav click triggered');
    setNavClick(true);
  };

  return (
    <>
      <header className='flex pt-10 pl-10 pr-5 justify-end'>
        <div className='w-[137px]'>
          <div role='button' onClick={triggerNavClick} className='button'>
            <span className='button-text w-[100px]'>{'Projects'}</span>
            <div className={`button-line ${navClick ? 'w-10' : 'w-5'}`}></div>
          </div>
        </div>
      </header>
      <main className='flex flex-col items-end min-h-screen pb-4 px-8'>
        <ConnectedCirclesDescendingScale letter={'T'} />
        <MainContent content={mainContentHome} />
      </main>
      <footer className='flex justify-between pb-10 px-5'></footer>
    </>
  );
}
