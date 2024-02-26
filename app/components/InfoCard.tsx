import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';

import { InfoCardProps } from '../types';
import { DeviceContext } from '../hooks/useContext/context';
import { DEVICE_NAMES } from '../constants/global';

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
  const device = useContext(DeviceContext);
  return (
    <div className='flex flex-col mt-[10px]'>
      {link ? (
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
      ) : (
        <div className='flex items-start justify-between'>
          <h2 className='font-semibold text-2xl capitalize'>
            {role ? `${role} - ${company}` : company}
          </h2>
        </div>
      )}
      <span className='text-base font-light text-white opacity-50 mb-4'>
        {dateRange}
      </span>
      <p
        className={`font-bold mb-2 ${
          device === DEVICE_NAMES.MOBILE ? '' : 'text-xl'
        }`}
      >
        {boldText}
      </p>
      <p
        className={
          device === DEVICE_NAMES.MOBILE
            ? 'font-light'
            : 'font-extralight text-lg'
        }
      >
        {normalText}
      </p>
      <div className='flex flex-wrap mt-6'>
        {technologies &&
          technologies.map((item) => {
            const { name, link, personalLink, brewbrokerLink } = item;
            return (
              <div
                key={name}
                className='technology-button mb-2 mr-2'
              >
                <span>{name}</span>
              </div>
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
