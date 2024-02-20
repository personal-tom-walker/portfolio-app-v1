import { buttonTypes } from '@/app/constants/global';

const AboutUp = ({ onClick, navClick }: { onClick: any; navClick: any }) => {
  return (
    <div className='flex items-end w-[80px]'>
      <div
        role='button'
        onClick={() => onClick(buttonTypes.about)}
        className='button'
      >
        <span className='button-text text-right w-[70px] pt-4'>
          {buttonTypes.about}
        </span>
        <div className='relative flex h-[23px] ml-[-2px] items-end'>
          <div
            className={`button-line-vertical button-line-vertical-short ${
              navClick.about ? 'h-5' : 'h-[10px]'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUp;
