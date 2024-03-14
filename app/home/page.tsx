'use client';

import { getUserSession } from '@/actions/session';
import { SectionActions } from '@/containers/home-page/actions-section';
import { SectionTrack } from '@/containers/home-page/track-section';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  // const { data: session } = useSession({
  //   required: true,
  // });

  // // Função para fazer o logout
  // const handleSignOut = async () => {
  //   try {
  //     // Chame a função signOut
  //     await signOut({
  //       redirect: true,
  //       callbackUrl: '/',
  //     });
  //   } catch (error) {
  //     console.error('Erro ao fazer logout:', error);
  //   }
  // };

  return (
    <section id='home-section' className='flex h-[90%] gap-6'>
      {/* <button onClick={handleSignOut}> Deslogar</button> */}

      <SectionTrack />
      <SectionActions />
    </section>
  );
}
