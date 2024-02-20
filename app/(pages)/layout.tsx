'use client';

import { DEVICE_NAMES, breakpoints } from '../constants/global';
import { DeviceContext } from '../hooks/useContext/context';
import useWindowWidth from '../hooks/useWindowWidth';

export default function DeviceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const windowWidth = useWindowWidth();
  if (windowWidth) {
    const getDeviceContext = () => {
      if (windowWidth >= breakpoints.desktop) {
        return DEVICE_NAMES.DESKTOP;
      }
      if (windowWidth >= breakpoints.tablet) {
        return DEVICE_NAMES.TABLET;
      }
      return DEVICE_NAMES.MOBILE;
    };

    return (
      <DeviceContext.Provider value={getDeviceContext()}>
        {children}
      </DeviceContext.Provider>
    );
  }
}
