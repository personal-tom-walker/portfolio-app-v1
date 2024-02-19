import Image from 'next/image';
import Link from 'next/link';

import { socials } from '@/app/constants/global';
import { SocialsObj } from '@/app/types';

import SocialItem from '../SocialItem';

const SocialsSidebar = () => {
  return (
    <aside className='absolute right-5 top-24'>
      {socials.map((item: SocialsObj) => {
        return (
          <div key={item.link} className='mt-4'>
            <SocialItem item={item} />
          </div>
        );
      })}
    </aside>
  );
};

export default SocialsSidebar;
