import { buttonTypes } from '@/app/constants/global';

const Home = ({ onClick, navClick }: { onClick: any; navClick: any }) => {
  return (
    <div className='flex items-end w-[100px]'>
      <div
        role='button'
        onClick={() => onClick(buttonTypes.home)}
        className='button justify-end'
      >
        <div className='flex w-10 justify-end'>
          <div
            className={`button-line-horizontal mr-[-1px] ${
              navClick.home ? 'w-10' : 'w-5'
            }`}
          ></div>
        </div>
        <span className='button-text text-right w-fit'>{buttonTypes.home}</span>
      </div>
    </div>
  );
};

export default Home;
