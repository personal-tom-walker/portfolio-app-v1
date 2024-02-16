import { createContext } from 'react';
import { DEVICE_NAMES } from '@/app/constants/global';

export const DeviceContext = createContext<string>(DEVICE_NAMES.MOBILE);
