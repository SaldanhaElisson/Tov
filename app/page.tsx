'use client';

import React from 'react';

import { HeaderSection } from '@/containers/login-page/header-section';
import { GoogleSection } from '@/containers/login-page/google-section';

export default function LoginPage() {
  return (
    <main className='flex  h-screen w-screen  justify-center  bg-login-page-lg bg-cover'>
      <section className=' mt-[10%] flex h-fit w-fit flex-col items-center gap-36'>
        <HeaderSection />

        <GoogleSection />
      </section>
    </main>
  );
}
