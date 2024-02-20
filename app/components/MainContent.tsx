import { MainContentProps } from '../types';

const MainContent = ({ content }: { content: MainContentProps }) => {
  const { title, subtitle, text } = content;
  return (
    <div className='flex flex-col w-full'>
      {title && <h1 className='mb-4'>{title}</h1>}
      {subtitle && <h2 className='mb-12 pl-1'>{subtitle}</h2>}
      <p className='text-lg font-extralight pl-1'>{text}</p>
    </div>
  );
};

export default MainContent;
