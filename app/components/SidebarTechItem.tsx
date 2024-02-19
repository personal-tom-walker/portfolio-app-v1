import { SidebarTechItemProps } from '../types';

const SidebarTechItem = ({ name, width }: SidebarTechItemProps) => {
  console.log('width', width);
  return (
    <div className='flex flex-col'>
      <div className='rounded-e-3xl opacity-20 bg-white h-12 w-full'></div>
      <span className='text-lg font-semibold text-white text-center mt-[-36px] mb-[8px]'>
        {name}
      </span>
      <div className={`sidebar-tech-item__progress-container ${width}`}>
        <div className='sidebar-tech-item__progress'></div>
      </div>
    </div>
  );
};

export default SidebarTechItem;
