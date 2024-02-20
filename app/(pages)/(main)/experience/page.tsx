import { DEVICE_NAMES, breakpoints } from '../../../constants/global';
import { DeviceContext } from '../../../hooks/useContext/context';
import useWindowWidth from '../../../hooks/useWindowWidth';

import ExperienceMobile from '../../../components/MobileOnly/Experience';
import ExperienceDesktop from '../../../components/DesktopOnly/Experience';

export default function Experience() {
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
          {device === DEVICE_NAMES.MOBILE ? (
            <ExperienceMobile />
          ) : (
            <ExperienceDesktop />
          )}
        </DeviceContext.Provider>
      )}
    </>
  );
}
