import Link from 'next/link';
import Image from 'next/image';

import { INFO_CARD_TYPES } from '../constants/global';
import { InfoCardProps } from '../types';

const InfoCard = ({ content, type }: InfoCardProps) => {
  const { role, company, link, dateRange, Description, technologies } = content;
  return (
    <div className='flex flex-col'>
      <Link
        href={link}
        target='_blank'
        className='flex items-start justify-between mb-2'
      >
        <h2 className='font-semibold text-2xl capitalize'>
          {role ? `${role} - ${company}` : company}
        </h2>
        <Image
          src={'external-link-blue-crop.svg'}
          alt='external link icon'
          height={10}
          width={20}
          className='mt-[-10px] ml-2'
        />
      </Link>
      <span className='text-base font-light text-white opacity-50 mb-2'>
        {dateRange}
      </span>
      {Description()}
      {type === INFO_CARD_TYPES.PROJECT &&
        technologies &&
        technologies.map((item: string) => {
          return <span key={item}>{item}</span>;
        })}
    </div>
  );
};

export default InfoCard;
