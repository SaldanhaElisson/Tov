import Image from 'next/image';
import React, { ImgHTMLAttributes } from 'react';

interface Iprops extends ImgHTMLAttributes<HTMLButtonElement> {
  img?: any;
  alt: string;
}

export const ToolsButton: React.FC<Iprops> = ({ img, alt, ...props }) => {
  return (
    <button
      className='mb-3 select-none rounded-2xl bg-blueLight p-2	'
      {...props}
    >
      <Image src={img} width={56} alt={alt} className='select-none	' />
    </button>
  );
};
