'use client';

import { NewReascherButton } from '@/components/Buttons/new-reascher-button';
import { PlusIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import React from 'react';

export const AddReascherDialogSection = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='bg-blueLight'>
        <Button size={'3'} className='cursor-pointer'>
          <PlusIcon width={24} height={24} color='#003735' />{' '}
          <p className='font-bold text-[#003735]'> Adicionar Pesquisa</p>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction='column' gap='3'>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Name
            </Text>
            <TextField.Input
              defaultValue='Freja Johnsen'
              placeholder='Enter your full name'
            />
          </label>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Email
            </Text>
            <TextField.Input
              defaultValue='freja@example.com'
              placeholder='Enter your email'
            />
          </label>
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray'>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
