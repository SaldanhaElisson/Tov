import React, { ImgHTMLAttributes } from 'react';
import Image from 'next/image';
interface Iprops extends ImgHTMLAttributes<HTMLButtonElement> {
  img?: any;
  alt: string;
}

export const ControlsButton: React.FC<Iprops> = ({ img, alt, ...props }) => {
  return (
    <button {...props}>
      <Image src={img} width={56} alt={alt} />
    </button>
  );
};
