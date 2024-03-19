import { NewReascherButton } from '@/components/Buttons/new-reascher-button';
import { TextFieldReascher } from '@/components/inputs/reascher-input';
import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import React from 'react';

export const ToolsTableSection = () => {
  return (
    <section className=' flex h-16 w-full items-center  gap-4 '>
      <TextFieldReascher />

      <NewReascherButton />
    </section>
  );
};
