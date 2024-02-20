import { buttonTypes } from '@/app/constants/global';

const HomeUp = ({
  onClick,
  navClick,
  isLong,
  isTop,
}: {
  onClick: any;
  navClick: any;
  isLong: boolean;
  isTop: boolean;
}) => {
  return (
    <div className={`flex w-[70px] ${isTop ? 'items-start mt-[-16px]' : 'items-end'}`}>
      <div
        role='button'
        onClick={() => onClick(buttonTypes.home)}
        className='button'
      >
        <span className='button-text text-right w-[55px] pt-4'>
          {buttonTypes.home}
        </span>
        <div className='relative flex h-[23px] ml-[-2px] items-end'>
          {isLong ? (
            <div
              className={`button-line-vertical button-line-vertical-long ${
                navClick.home ? 'h-10' : 'h-5'
              }`}
            ></div>
          ) : (
            <div
              className={`button-line-vertical button-line-vertical-short ${
                navClick.home ? 'h-5' : 'h-[10px]'
              }`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeUp;
