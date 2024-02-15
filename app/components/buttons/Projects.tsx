import { buttonTypes } from '@/app/constants/global';

const Projects = ({ onClick, navClick }: { onClick: any; navClick: any }) => {
  return (
    <div className='flex h-20 pt-9 pl-10 pr-5 justify-end'>
      <div className='flex items-end w-[137px]'>
        <div
          role='button'
          onClick={() => onClick(buttonTypes.projects)}
          className='button'
        >
          <span className='button-text text-right w-[100px]'>
            {buttonTypes.projects}
          </span>
          <div
            className={`button-line-horizontal ml-[-3px] ${
              navClick.projects ? 'w-10' : 'w-5'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
