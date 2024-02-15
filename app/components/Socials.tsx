import Image from 'next/image';
import Link from 'next/link';

import { socials } from '../constants/global';

const Socials = () => {
  return (
    <aside className='absolute right-5 top-24'>
      {socials.map((item) => {
        return (
          <div key={item.link} className='mt-4'>
            <Link href={item.link} target='_blank' className='cursor-pointer'>
              <Image
                src={item.img}
                alt='linkedin icon'
                height={40}
                width={40}
              />
            </Link>
          </div>
        );
      })}
    </aside>
  );
};

export default Socials;
