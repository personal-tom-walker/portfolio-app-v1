import Link from 'next/link';
import Image from 'next/image';

import { InfoCardProps } from '../types';

const InfoCard = ({ content }: InfoCardProps) => {
  const {
    role,
    company,
    link,
    dateRange,
    boldText,
    normalText,
    technologies,
    ownDesign,
  } = content;
  return (
    <div className='flex flex-col'>
      <Link
        href={link}
        target='_blank'
        className='flex items-start justify-between'
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
      <span className='text-base font-light text-white opacity-50 mb-6'>
        {dateRange}
      </span>
      <p className='font-bold mb-2'>{boldText}</p>
      <p className='font-light'>{normalText}</p>
      <div className='flex flex-wrap mt-6'>
        {technologies &&
          technologies.map((item) => {
            const { name, link, personalLink, brewbrokerLink } = item;
            return (
              <Link
                key={name}
                href={link || personalLink || brewbrokerLink || '/'}
                target='_blank'
                className='technology-button mb-3 mr-3'
              >
                <span>{name}</span>
              </Link>
            );
          })}
        {ownDesign && (
          <span className='technology-button technology-button-alt mb-3 mr-3'>
            {'Own Design'}
          </span>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
