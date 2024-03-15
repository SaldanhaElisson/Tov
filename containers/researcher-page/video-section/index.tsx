'use client';

import { ControlsButton } from '@/components/Buttons/ControlsButtons';
import UseTools from '@/store/useTools';
import React, { useRef, useState } from 'react';

import iconPlay from '@/public/play_arrow.svg';

import iconPause from '@/public/icon _pause.svg';
import { WhiteboardCanvas2 } from '../canvas-setion/components2';

export const SectionVideo = () => {
  const mousePatter = UseTools((state) => state.mousePatter);
  const pencil = UseTools((state) => state.pencil);

  const [paused, setPaused] = useState<Boolean>(false);

  const [x, setX] = useState<Number>(0);
  const [y, setY] = useState<Number>(0);
  const [timeCurrent, setTimeCurrent] = useState<Number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  function getCord(event: React.MouseEvent<HTMLVideoElement, MouseEvent>) {
    console.log('aa');
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

    console.log(pencil);

    if (elementToChange && pencil) {
      elementToChange.style.cursor = "url('pencil.svg'), auto";
    } else if (elementToChange) {
      elementToChange.style.cursor = 'default';
    }
  }

  function controlsCustoom() {
    setPaused((prev) => !prev);

    if (paused) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }

  return (
    <section className='flex h-full w-full items-center justify-center rounded-2xl bg-surfaceWhite'>
      <div className='relative'>
        <video
          ref={videoRef}
          id='video'
          width='600'
          muted
          height='400'
          preload='auto'
          onMouseMove={getCord}
        >
          <source src='video3.mp4' type='video/mp4' />
        </video>

        {/* <WhiteboardCanvas2 /> */}

        <div
          id='custom-controls'
          className='mt-7 flex h-full w-full justify-center'
        >
          <ControlsButton
            img={paused ? iconPause : iconPlay}
            alt='botão de play'
            onClick={controlsCustoom}
          />
        </div>

        <div className='mt-9 text-xl'>{`Tools: ${mousePatter} Time: ${timeCurrent} Y: ${y} X: ${x}`}</div>
      </div>
    </section>
  );
};
