'use client';

import { CircleContentProps } from '../types';

const ConnectedCirclesDescendingScale = ({
  isImg = false,
  letter,
}: CircleContentProps) => {
  // variations to consider:
  // -  size(mobile v desktop)
  //     - contents of largest circle:
  //         - img OR letter in square OR none
  return (
    <div className='flex flex-col w-[350px]'>
      <div className='w-64 h-64 bg-white opacity-20 rounded-full mb-[-4px]'></div>
      <div
        className={`flex justify-center w-64 mt-[${
          letter ? '-158px' : '0'
        }] mb-[${letter ? '86px' : '0'}]`}
      >
        <span className='circle-letter'>{letter || ''}</span>
      </div>
      <div className='flex flex-col items-end'>
        <div className='w-16 border-b-2 border-white opacity-20 mr-[90px] mb-[12px] rotate-[50deg]'></div>
        <div className='w-32 h-32 bg-white opacity-20 rounded-full'></div>
      </div>
      <div className='flex flex-col items-end'>
        <div className='w-8 border-b-2 border-white opacity-20 mr-[95px] mb-[5px] rotate-[-50deg]'></div>
        <div className='w-16 h-16 bg-white opacity-20 rounded-full mr-[109px]'></div>
      </div>
    </div>
  );
};

export default ConnectedCirclesDescendingScale;
