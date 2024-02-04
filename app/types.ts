export interface CircleContentProps {
    isImg?: boolean;
    letter?: string;
}

export interface MainContentProps {
    title?: string;
    subtitle?: string;
    text: string;
}

interface InfoCardContentProps {
  role?: string;
  company: string;
  link: string;
  dateRange: string;
  Description: any;
  technologies?: string[];
}

export interface InfoCardProps {
  content: InfoCardContentProps;
  type: string;
}