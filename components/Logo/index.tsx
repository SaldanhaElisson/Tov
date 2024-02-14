import React from 'react';
import TrackLogo from '@/public/track_logo.svg';
import Image from 'next/image';
export const Logo = () => {
  return (
    <div className='mb-6 flex w-[80%] items-center justify-center gap-2'>
      <Image src={TrackLogo} alt='imagem da logo' width={35} />
      <h1 className='bold  text-4xl font-bold text-blueLight'> TOV</h1>
    </div>
  );
};
2;
