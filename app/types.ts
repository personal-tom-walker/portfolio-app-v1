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