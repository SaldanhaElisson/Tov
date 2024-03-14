import React from 'react';
import icon from '@/public/icon-google.png';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export const GoogleSection = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const handleLogin = async () => {
    try {
      signIn('google', { callbackUrl });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <a
      className='mb-3 flex w-72  items-center justify-center rounded py-4 text-xl font-medium uppercase leading-snug text-white shadow-md 
    transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none
     focus:ring-0 active:shadow-lg'
      style={{ backgroundColor: '#ffffff', color: 'gray' }}
      onClick={handleLogin}
      role='button'
    >
      <Image className='mr-3 ' height={30} src={icon} alt='icone do google' />
      Continue with Google
    </a>
  );
};
