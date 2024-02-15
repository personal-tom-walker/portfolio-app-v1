import Image from 'next/image';
import Link from 'next/link';

import { SocialItemsProps } from '../types';

const SocialItem = ({ item }: SocialItemsProps) => {
  const { name, img, link } = item;
  return (
    <Link href={link} target='_blank' className='cursor-pointer'>
      <Image src={img} alt={`${name} icon`} height={40} width={40} className='social-icon' />
    </Link>
  );
};

export default SocialItem;
