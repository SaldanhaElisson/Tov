import Image from 'next/image';
import React from 'react';

import withoutProfileIcon from '@/public/without-profile.png';
import { IprofileProps } from '@/types';

export const Profile: React.FC<IprofileProps> = ({ avatar, name }) => {
  return (
    <div className='flex cursor-pointer items-center gap-4 '>
      <p className='text-xl '> {name}</p>
      <Image
        className='rounded-full border-4 border-blueLight'
        width={80}
        height={80}
        src={avatar ? avatar : withoutProfileIcon}
        alt={`foto de perfil do ${name}`}
      />
    </div>
  );
};
