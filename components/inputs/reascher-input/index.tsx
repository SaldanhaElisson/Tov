'use client';
import React from 'react';

import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const TextFieldReascher = () => {
  return (
    <div>
      <TextField.Root
        className='w-96  '
        radius='full'
        color='cyan'
        variant='surface'
        size={'3'}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height='18' width='18' />
        </TextField.Slot>
        <TextField.Input placeholder='Pesquisar...' />
      </TextField.Root>
    </div>
  );
};
