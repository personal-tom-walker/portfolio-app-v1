import { buttonTypes } from '@/app/constants/global';

const Experience = ({
  onClick,
  navClick,
  isLong,
}: {
  onClick: any;
  navClick: any;
  isLong: boolean;
}) => {
  return (
    <div className='w-[120px]'>
      <div
        role='button'
        onClick={() => onClick(buttonTypes.experience)}
        className='button'
      >
        <span className='button-text text-right w-[120px]'>
          {buttonTypes.experience}
        </span>
        {isLong ? (
          <div
            className={`button-line-vertical button-line-vertical-long mt-[20px] ml-[-2px] ${
              navClick.experience ? 'h-10' : 'h-5'
            }`}
          ></div>
        ) : (
          <div
            className={`button-line-vertical button-line-vertical-short mt-[20px] ml-[-2px] ${
              navClick.experience ? 'h-5' : 'h-[10px]'
            }`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Experience;
