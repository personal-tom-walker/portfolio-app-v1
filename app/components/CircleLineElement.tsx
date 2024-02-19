'use client';

import { CircleLineElementProps } from '../types';

const CircleLineElement = ({ index, letter }: CircleLineElementProps) => {
  return (
    <div className={`flex flex-col ${index % 2 ? '' : 'items-end'}`}>
      {index !== 0 && (
        <div
          className={`border-b-2 border-white opacity-20 w-[57px] rotate-[-46deg] ml-[90px] mb-[6px] ${
            index % 2 ? 'rotate-[-46deg] ml-[90px]' : 'rotate-[47deg] mr-[90px]'
          }`}
        ></div>
      )}
      <div className='circle-line-element__circle-letter-container'>
        <div className='circle-line-element__circle'></div>
        <div className='circle-line-element__letter-box'>
          <div className='w-full h-full rotate-[-45deg] flex justify-center items-center'>
            <span className='circle-line-element__letter'>{letter}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleLineElement;
