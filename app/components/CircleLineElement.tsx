'use client';

import { CircleLineElementProps } from '../types';

const CircleLineElement = ({
  index,
  letter,
  activeIndex,
  setActiveIndex,
}: CircleLineElementProps) => {
  const handleOnClick = (i: number) => {
    console.log('click');
    setActiveIndex(i);
  }
  return (
    <div className={`flex flex-col ${index % 2 ? '' : 'items-end'}`}>
      {index !== 0 && (
        <div
          className={`border-b-2 border-white opacity-20 w-[57px] rotate-[-46deg] ml-[90px] mb-[6px] ${
            index % 2 ? 'rotate-[-46deg] ml-[90px]' : 'rotate-[47deg] mr-[90px]'
          }`}
        ></div>
      )}
      <div
        className={`circle-line-element__circle-letter-container ${
          activeIndex === index ? 'scale-125' : ''
        }`}
      >
        <div
          role='button'
          tabIndex={0}
          className={`circle-line-element__circle ${
            activeIndex === index ? 'circle-line-element__circle-active' : ''
          }`}
          onMouseOver={() => setActiveIndex(index)}
          onClick={() => handleOnClick(index)}
        ></div>
        <div
          className={`w-[60px] h-[60px] border-x border-y border-white rotate-45 mt-[-90px] mb-[30px] ml-[30px] cursor-pointer ${
            activeIndex === index
              ? 'circle-line-element__letter-box-active'
              : 'z-[-10]'
          }`}
        >
          <div className='w-full h-full rotate-[-45deg] flex justify-center items-center'>
            <span
              className={`circle-line-element__letter ${
                activeIndex === index
                  ? 'circle-line-element__letter-active'
                  : ''
              }`}
            >
              {letter}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleLineElement;
