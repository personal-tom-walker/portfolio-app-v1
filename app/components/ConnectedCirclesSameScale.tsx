'use client';

import { useState, useEffect } from 'react';

import { CircleContentProps } from '../types';

import CircleLineElement from './CircleLineElement';

const ConnectedCirclesSameScale = ({
  isHome = false,
  isImg = false,
  letter,
}: CircleContentProps) => {
  return (
    <div className='flex flex-col mr-[-20px]'>
      <div className='flex justify-center items-center w-64 mt-[-163px] mb-[83px]'>
        <div
          className='w-[80px] h-[80px] border-x border-y border-white rotate-45'
        >
          <div className='w-full h-full rotate-[-45deg] flex justify-center items-center'>
            <span className='circle-letter'>{letter}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <div className='border-b-2 border-white opacity-20 mb-[12px] w-[132px] mr-[173px] rotate-[47deg]'></div>
        <div className='bg-white opacity-20 rounded-full w-[225px] h-[225px]'></div>
      </div>
      <CircleLineElement />
    </div>
  );
};

export default ConnectedCirclesSameScale;
