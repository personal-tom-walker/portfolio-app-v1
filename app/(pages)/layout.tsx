// import { DEVICE_NAMES, breakpoints } from '../constants/global';
// import { DeviceContext } from '../hooks/useContext/context';
// import useWindowWidth from '../hooks/useWindowWidth';

export default function DeviceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   return (
  //     <DeviceContext.Provider value={getDeviceContext()}>
  //       {children}
  //     </DeviceContext.Provider>
  //   );
  // }
  if (typeof window === 'undefined') {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h2>{'Loading...'}</h2>
      </div>
    );
  }
  return <>{children}</>
}
