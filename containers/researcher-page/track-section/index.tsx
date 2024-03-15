import React from 'react';
import { SectionToolsButtons } from '../tools-section';
import { SectionVideo } from '../video-section';

import { WhiteboardCanvas2 } from '../canvas-setion/components2';

export const SectionTrack = () => {
  return (
    <section className='relative flex h-full w-full'>
      <SectionToolsButtons />
      <SectionVideo />
    </section>
  );
};
