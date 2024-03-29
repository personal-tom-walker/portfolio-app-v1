import { buttonTypes } from '@/app/constants/global';

const AboutDown = ({ onClick, navClick }: { onClick: any; navClick: any }) => {
  return (
    <div className='w-[80px]'>
      <div
        role='button'
        onClick={() => onClick(buttonTypes.about)}
        className='button'
      >
        <span className='button-text text-right w-[70px]'>
          {buttonTypes.about}
        </span>
        <div
          className={`button-line-vertical button-line-vertical-short mt-[20px] ml-[-6px] ${
            navClick.about ? 'h-5' : 'h-[10px]'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default AboutDown;
