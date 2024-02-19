import { buttonTypes } from '@/app/constants/global';

const HomeUp = ({ onClick, navClick }: { onClick: any; navClick: any }) => {
  return (
    <div className='flex items-end w-[100px]'>
      <div
        role='button'
        onClick={() => onClick(buttonTypes.home)}
        className='button'
      >
        <span className='button-text text-right w-[70px] pt-4'>
          {buttonTypes.home}
        </span>
        <div className='relative flex h-[23px] ml-[-2px] items-end'>
          <div
            className={`button-line-vertical-short-up ${
              navClick.home ? 'h-5' : 'h-[10px]'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeUp;
