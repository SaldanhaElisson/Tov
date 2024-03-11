import Image from 'next/image';
import React from 'react';
import routeIcon from '@/public/route-white.svg';

export const HeaderSection = () => {
  return (
    <>
      <header className='flex flex-col items-center justify-center'>
        <section className='flex items-center justify-center'>
          <h1 className='mr-2 items-start text-7xl font-bold text-white'>
            {'TOV '}
          </h1>

          <Image src={routeIcon} alt='Icone de uma estrada' />
        </section>
        <p className='mt-6 w-[35rem] text-center  text-2xl font-semibold text-white'>
          {' '}
          Sistema de pesquisa para coletar dados de vídeos, identificar e
          rastrear objetos em diferentes cenários.
        </p>
      </header>
    </>
  );
};
