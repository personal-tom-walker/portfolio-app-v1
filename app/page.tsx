'use client';

import { useState } from 'react';

import ConnectedCirclesDescendingScale from './components/ConnectedCirclesDescendingScale';

export default function Home() {
  const [navClick, setNavClick] = useState(false);
  const triggerNavClick = () => {
    console.log('nav click triggered');
    setNavClick(true);
  };

  return (
    <>
      <header className='flex pt-10 px-10 justify-end'>
        <div className='w-[137px]'>
          <div role='button' onClick={triggerNavClick} className='button'>
            <span className='button-text w-[100px]'>{'Projects'}</span>
            <div className={`button-line ${navClick ? 'w-10' : 'w-5'}`}></div>
          </div>
        </div>
      </header>
      <main className='flex flex-col items-end min-h-screen pb-5 px-5'>
        <ConnectedCirclesDescendingScale letter={'T'} />
      </main>
      <footer className='flex justify-between pb-10 px-5'></footer>
    </>
  );
}
