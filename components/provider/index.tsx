'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Theme accentColor='cyan' radius='full'>
      <SessionProvider> {children}</SessionProvider>{' '}
    </Theme>
  );
};

export default Provider;
