'use client';

import { breakpoints } from './constants/global';

import useWindowWidth from './hooks/getWindowWidth';

import HomeMobile from './components/mobile/Home';
import SocialsSidebar from './components/mobile/SocialsSidebar';

import HomeDesktop from './components/desktop/Home';

export default function Home() {
  const windowWidth = useWindowWidth();

  if (windowWidth >= breakpoints.desktop) return <HomeDesktop />;
  return (
    <>
      <HomeMobile />
      <SocialsSidebar />
    </>
  );
}
