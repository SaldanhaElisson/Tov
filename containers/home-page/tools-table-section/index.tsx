import { NewReascherButton } from '@/components/Buttons/new-reascher-button';
import { TextFieldReascher } from '@/components/inputs/reascher-input';
import React from 'react';
import { AddReascherDialogSection } from '../add-reascher-diolg-section';

export const ToolsTableSection = () => {
  return (
    <section className=' flex h-16 w-full items-center  gap-4 '>
      <TextFieldReascher />

      <AddReascherDialogSection />
    </section>
  );
};
