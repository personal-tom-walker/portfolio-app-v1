'use client';

import { useContext } from 'react';

import { DEVICE_NAMES } from '../../../constants/global';
import { DeviceContext } from '../../../hooks/useContext/context';

import AboutMobile from '../../../components/MobileOnly/About';
import AboutDesktop from '../../../components/DesktopOnly/About';

export default function About() {
  const device = useContext(DeviceContext);

  if (device === DEVICE_NAMES.MOBILE) {
    return <AboutMobile />;
  }
  return <AboutDesktop />;
}
