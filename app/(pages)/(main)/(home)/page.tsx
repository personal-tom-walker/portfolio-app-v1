'use client';

import { DEVICE_NAMES, breakpoints } from '../../../constants/global';
import { DeviceContext } from '../../../hooks/useContext/context';
import useWindowWidth from '../../../hooks/useWindowWidth';

import HomeMobile from '../../../components/MobileOnly/Home';
import HomeDesktop from '../../../components/DesktopOnly/Home';

export default function Home() {
  const windowWidth = useWindowWidth();
  const getDeviceContext = () => {
    if (windowWidth >= breakpoints.desktop) {
      return DEVICE_NAMES.DESKTOP;
    }
    if (windowWidth >= breakpoints.tablet) {
      return DEVICE_NAMES.TABLET;
    }
    return DEVICE_NAMES.MOBILE;
  };
  const device = getDeviceContext();
  return (
    <DeviceContext.Provider value={device}>
      {device === DEVICE_NAMES.MOBILE ? <HomeMobile /> : <HomeDesktop />}
    </DeviceContext.Provider>
  );
}
