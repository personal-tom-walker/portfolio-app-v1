'use client';

import { useContext } from 'react';

import { DEVICE_NAMES } from '../../constants/global';
import { DeviceContext } from '../../hooks/useContext/context';

import SocialsSidebar from '../../components/MobileOnly/SocialsSidebar';
import TechSidebar from '../../components/DesktopOnly/TechSidebar';

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const device = useContext(DeviceContext);

  if (device === DEVICE_NAMES.MOBILE) {
    return (
      <>
        {children}
        <SocialsSidebar />
      </>
    );
  }
  return (
    <>
      {children}
      <TechSidebar />
    </>
  );
}
