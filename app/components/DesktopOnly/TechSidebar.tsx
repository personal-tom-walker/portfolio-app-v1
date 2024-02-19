import { techSidebarValues } from '../../constants/techSidebar';
import { TECH_SIDEBAR_ITEM_WIDTH } from '../../constants/techSidebar';

import SidebarTechItem from '../SidebarTechItem';

const TechSidebar = () => {
    return (
      <div
        className={`absolute left-0 top-0 h-screen flex flex-col justify-center gap-4 ${TECH_SIDEBAR_ITEM_WIDTH}`}
      >
        {techSidebarValues.map((item) => {
          const { name, width } = item;
          return <SidebarTechItem key={name} name={name} width={width} />;
        })}
      </div>
    );
};

export default TechSidebar;
