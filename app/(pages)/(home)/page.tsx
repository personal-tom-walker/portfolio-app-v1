'use client';

import { useContext } from 'react';

import { DEVICE_NAMES } from '../../constants/global';
import { DeviceContext } from '../../hooks/useContext/context';

import HomeMobile from '../../components/MobileOnly/Home';
import SocialsSidebar from '../../components/MobileOnly/SocialsSidebar';

import HomeDesktop from '../../components/DesktopOnly/Home';

export default function Home() {
  const device = useContext(DeviceContext);

  if (device === DEVICE_NAMES.MOBILE) {
    return (
      <>
        <HomeMobile />
        <SocialsSidebar />
      </>
    );
  }
  return <HomeDesktop />;
}
