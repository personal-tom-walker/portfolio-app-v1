import { techSidebarValues } from '../../constants/techSidebar';
import { TECH_SIDEBAR_ITEM_WIDTH } from '../../constants/techSidebar';

import SidebarTechItem from '../SidebarTechItem';

const TechSidebar = () => {
    return (
      <div
        className={`absolute h-screen left-0 top-0 z-10 flex flex-col justify-center gap-4 overflow-hidden ${TECH_SIDEBAR_ITEM_WIDTH}`}
      >
        {techSidebarValues.map((item) => {
          const { name, width } = item;
          return <SidebarTechItem key={name} name={name} width={width} />;
        })}
      </div>
    );
};

export default TechSidebar;
