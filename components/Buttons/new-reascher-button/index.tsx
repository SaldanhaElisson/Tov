import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import React from 'react';

export const NewReascherButton = () => {
  return (
    <>
      <Button color='cyan' radius='full' size={'3'} className='cursor-pointer'>
        <PlusIcon width={24} height={24} />{' '}
        <p className='font-bold'> Adicionar Pesquisa</p>
      </Button>
    </>
  );
};
