'use client';

import { DEVICE_NAMES, breakpoints } from '../../../constants/global';
import { DeviceContext } from '../../../hooks/useContext/context';
import useWindowWidth from '../../../hooks/useWindowWidth';

import AboutMobile from '../../../components/MobileOnly/About';
import AboutDesktop from '../../../components/DesktopOnly/About';

export default function About() {
 const windowWidth = useWindowWidth();
  const getDeviceContext = () => {
    if (windowWidth) {
      if (windowWidth >= breakpoints.desktop) {
        return DEVICE_NAMES.DESKTOP;
      }
      if (windowWidth >= breakpoints.tablet) {
        return DEVICE_NAMES.TABLET;
      }
      return DEVICE_NAMES.MOBILE;
    }
    return null;
  };
  const device = getDeviceContext();
  return (
    <>
      {!device ? (
        <div>{'undefined window'}</div>
      ) : (
        <DeviceContext.Provider value={device}>
          {device === DEVICE_NAMES.MOBILE ? <AboutMobile /> : <AboutDesktop />}
        </DeviceContext.Provider>
      )}
    </>
  );
}
