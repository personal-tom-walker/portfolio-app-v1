'use client';

import { useContext } from 'react';

import { DEVICE_NAMES } from '../../../constants/global';
import { DeviceContext } from '../../../hooks/useContext/context';

import ExperienceMobile from '../../../components/MobileOnly/Experience';
import ExperienceDesktop from '../../../components/DesktopOnly/Experience';

export default function About() {
  const device = useContext(DeviceContext);

  if (device === DEVICE_NAMES.MOBILE) {
    return (
      <>
        <ExperienceMobile />
      </>
    );
  }
  return (
    <>
      <ExperienceDesktop />
    </>
  );
}
