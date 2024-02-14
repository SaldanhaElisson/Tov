import React from 'react';
import { SectionToolsButtons } from '../SectionToolsButtons';
import { SectionVideo } from '../SectionVideo';

export const SectionTrack = () => {
  return (
    <section className='flex h-full w-full'>
      <SectionToolsButtons />
      <SectionVideo />
    </section>
  );
};
