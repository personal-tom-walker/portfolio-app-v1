import Link from 'next/link';

import { INFO_CARD_TYPES } from '../constants/global';
import { InfoCardProps } from '../types';

const InfoCard = ({ content, type }: InfoCardProps) => {
  const { role, company, link, dateRange, description, technologies } = content;
  return (
    <div className='flex flex-col'>
      <Link href={link} target='_blank'>
        <h2>{role ? `${role} - ${company}` : company}</h2>
      </Link>
      <span className='text-base font-light text-white opacity-50'>
        {dateRange}
      </span>
      <p>{description}</p>
      {type === INFO_CARD_TYPES.PROJECT &&
        technologies &&
        technologies.map((item: string) => {
          return <span key={item}>{item}</span>;
        })}
    </div>
  );
};

export default InfoCard;
