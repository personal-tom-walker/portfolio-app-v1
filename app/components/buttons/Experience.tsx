import { buttonTypes } from '@/app/constants/global';

const Experience = ({ onClick, navClick }: { onClick: any; navClick: any }) => {
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
        <div
          className={`button-line-vertical-long ml-[-2px] ${
            navClick.experience ? 'h-10' : 'h-5'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Experience;
