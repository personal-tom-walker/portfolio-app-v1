'use client';

import Image from 'next/image';

import { CircleContentProps } from '../types';
import { breakpoints } from '../constants/global';
import useWindowWidth from '../hooks/useWindowWidth';

import Img from '../../public/profile-line-drawing-200.png';
import DesktopImg from '../../public/profile-line-drawing-350.png';
import { useEffect, useState } from 'react';

const ConnectedCirclesDescendingScale = ({
  isHome = false,
  isImg = false,
  letter,
}: CircleContentProps) => {
  const windowWidth = useWindowWidth();


  return (
    <>
      {windowWidth ? (
        <div
          className={`flex flex-col mr-[-20px] ${
            windowWidth <= breakpoints.desktop ? 'w-[350px]' : 'w-[650px]'
          }`}
        >
          <div
            className={`overflow-hidden rounded-full mb-[-4px] ${
              windowWidth <= breakpoints.desktop
                ? 'w-64 h-64'
                : 'w-[450px] h-[450px]'
            } ${
              isImg
                ? 'bg-transparent border-x border-y opacity-70'
                : 'bg-white opacity-20'
            }`}
          >
            {isImg && (
              <Image
                src={windowWidth <= breakpoints.desktop ? Img : DesktopImg}
                alt={'profile line drawing'}
                className={`relative m-auto ${
                  windowWidth <= breakpoints.desktop ? 'mt-[15px]' : 'mt-[28px]'
                }`}
              />
            )}
          </div>
          <div
            className={`flex justify-center items-center w-64 ${
              letter && !isHome ? `mt-[-203px] mb-[123px]` : ''
            } ${letter && isHome ? `mt-[-163px] mb-[83px]` : ''}`}
          >
            {letter && (
              <div
                className={`w-[80px] h-[80px] ${
                  letter ? 'border-x border-y border-white' : ''
                } rotate-45`}
              >
                <div className='w-full h-full rotate-[-45deg] flex justify-center items-center'>
                  <span className='circle-letter text-5xl'>{letter}</span>
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-col items-end'>
            <div
              className={`w-16 border-b-2 border-white opacity-20 mb-[12px] ${
                windowWidth <= breakpoints.desktop
                  ? 'w-16 mr-[90px] rotate-[50deg]'
                  : 'w-[132px] mr-[173px] rotate-[47deg]'
              }`}
            ></div>
            <div
              className={`bg-white opacity-20 rounded-full ${
                windowWidth <= breakpoints.desktop
                  ? 'w-32 h-32'
                  : 'w-[225px] h-[225px]'
              }`}
            ></div>
          </div>
          <div className='flex flex-col items-end'>
            <div
              className={`border-b-2 border-white opacity-20 ${
                windowWidth <= breakpoints.desktop
                  ? 'w-8 rotate-[-50deg] mr-[95px] mb-[5px]'
                  : 'w-[57px] rotate-[-46deg] mr-[182px] mt-[-12px] mb-[6px]'
              }`}
            ></div>
            <div
              className={`bg-white opacity-20 rounded-full ${
                windowWidth <= breakpoints.desktop
                  ? 'w-16 h-16 mr-[109px]'
                  : 'w-[100px] h-[100px] mr-[215px]'
              }`}
            ></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConnectedCirclesDescendingScale;
