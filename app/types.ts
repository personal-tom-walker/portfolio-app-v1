export interface SocialsObj {
  name: string;
  img: string;
  link: string;
}

export interface SocialItemsProps {
  item: SocialsObj;
}

export interface SidebarTechItemProps {
  name: string;
  width: string;
}
 
export interface CircleLineElementProps {
  index: number;
  letter: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface CircleContentProps {
  isHome?: boolean;
  isImg?: boolean;
  letter?: string;
}

export interface MainContentProps {
  title?: string;
  subtitle?: string;
  text: string;
}

interface Technologies {
  name: string;
  link?: string;
  personalLink?: string;
  brewbrokerLink?: string;
}

interface InfoCardContentProps {
  role?: string;
  company: string;
  link: string;
  dateRange: string;
  boldText?: string;
  normalText: string;
  technologies?: Technologies[];
  ownDesign?: boolean;
}

export interface InfoCardProps {
  content: InfoCardContentProps;
}

// NAV BUTTONS
