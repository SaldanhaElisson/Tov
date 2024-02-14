import Image from 'next/image';
import React, { ImgHTMLAttributes } from 'react';

interface Iprops extends ImgHTMLAttributes<HTMLImageElement> {
  img?: any;
  alt: string;
}

export const ToolsButton: React.FC<Iprops> = ({ img, alt }) => {
  return (
    <button className='mb-3 rounded-2xl bg-blueLight p-2'>
      <Image src={img} width={56} alt={alt} />
    </button>
  );
};
