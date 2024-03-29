'use client';

import { useContext } from 'react';

import { DEVICE_NAMES } from '../../constants/global';
import { DeviceContext } from '../../hooks/useContext/context';

import ProjectsMobile from '../../components/MobileOnly/Projects';
import ProjectsDesktop from '../../components/DesktopOnly/Projects';

export default function Projects() {
  const device = useContext(DeviceContext);

  if (device === DEVICE_NAMES.MOBILE) {
    return <ProjectsMobile />;
  }
  return <ProjectsDesktop />;
}
