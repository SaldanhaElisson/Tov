import { ToolsButton } from '@/components/Buttons/ToolsButton';

import mouseIcon from '@/public/mouse.svg';
import inkEraseIcon from '@/public/ink_eraser.svg';
import pencilIcon from '@/public/pencil.svg';
import zoonInIcon from '@/public/zoom_in.svg';
import zoonOutIcon from '@/public/zoom_out.svg';

import React from 'react';

export const SectionToolsButtons = () => {
  return (
    <section className='z-10 mr-[-2rem] flex h-full flex-col justify-center'>
      <ToolsButton img={mouseIcon} alt='image mouse' />
      <ToolsButton img={pencilIcon} alt='image pencilIcon' />
      <ToolsButton img={inkEraseIcon} alt='image inkErase' />
      <ToolsButton img={zoonInIcon} alt='image zoonIn' />
      <ToolsButton img={zoonOutIcon} alt='image zoonOut' />
    </section>
  );
};
