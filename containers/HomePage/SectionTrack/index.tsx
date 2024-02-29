import React from 'react';
import { SectionToolsButtons } from '../SectionToolsButtons';
import { SectionVideo } from '../SectionVideo';

import { WhiteboardCanvas2 } from '../Canvas/components2';

export const SectionTrack = () => {
  return (
    <section className='relative flex h-full w-full'>
      <SectionToolsButtons />
      <SectionVideo />
    </section>
  );
};
