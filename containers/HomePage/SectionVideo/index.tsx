'use client';

import UseTools from '@/store/useTools';
import React, { useState } from 'react';

export const SectionVideo = () => {
  const mousePatter = UseTools((state) => state.mousePatter);
  const pencil = UseTools((state) => state.pencil);

  const [x, setX] = useState<Number>(0);
  const [y, setY] = useState<Number>(0);
  const [timeCurrent, setTimeCurrent] = useState<Number>(0);

  function getCord(event: React.MouseEvent<HTMLVideoElement, MouseEvent>) {
    changeCourse();

    const video = document.getElementById('video') as HTMLVideoElement;

    const timeCurrent = video?.currentTime;

    const targe = event.target as HTMLElement;

    const propsElement = targe.getBoundingClientRect();

    const x = event.clientX - propsElement.left;
    const y = propsElement.bottom - event.clientY;

    setTimeCurrent(timeCurrent);
    setY(y);
    setX(x);
  }

  function changeCourse() {
    const elementToChange = document.getElementById('video');

    if (elementToChange && pencil) {
      elementToChange.style.cursor = "url('pencil.svg'), auto";
    } else if (elementToChange) {
      elementToChange.style.cursor = 'default';
    }
  }

  return (
    <section className='flex h-full w-full items-center justify-center rounded-2xl bg-surfaceWhite'>
      <div>
        <video
          controls
          id='video'
          width='1000'
          muted
          height='600'
          preload='auto'
          onMouseMove={getCord}
        >
          <source src='video3.mp4' type='video/mp4' />
        </video>

        <div className='mt-9 text-4xl'>{`Tools: ${mousePatter} Time: ${timeCurrent} Y: ${y} X: ${x}`}</div>
      </div>
    </section>
  );
};
