import Link from 'next/link';

import { PROFESSIONAL_EMAIL, socials } from '@/app/constants/global';
import { SocialsObj } from '@/app/types';

import SocialItem from '../SocialItem';

const Footer = () => {
  return (
    <footer className='flex justify-between items-center h-20 pb-10 px-10'>
      <Link
        href={`mailto:${PROFESSIONAL_EMAIL}`}
        className='text-white font-extralight text-sm'
      >
        {PROFESSIONAL_EMAIL}
      </Link>
      <div className='flex'>
        {socials.map((item: SocialsObj) => {
          return (
            <div key={item.link} className='ml-3'>
              <SocialItem item={item} />
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
