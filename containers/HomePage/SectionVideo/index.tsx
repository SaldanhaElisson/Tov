'use client';

import React, { useState } from 'react';

export const SectionVideo = () => {
  const [x, setX] = useState<Number>(0);
  const [y, setY] = useState<Number>(0);
  let timeCurrent: number = 0;

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
          onMouseMove={(event) => {
            const video = document.getElementById('video') as HTMLVideoElement;

            timeCurrent = video?.currentTime;
            console.log(video?.currentTime);

            const targe = event.target as HTMLElement;

            const propsElement = targe.getBoundingClientRect();

            const x = event.clientX - propsElement.left;
            const y = propsElement.bottom - event.clientY;

            setY(y);
            setX(x);
          }}
        >
          <source src='video3.mp4' type='video/mp4' />
        </video>

        <div className='mt-9 text-4xl'>{`Time: ${timeCurrent} Y: ${y} X: ${x}`}</div>
      </div>
    </section>
  );
};
