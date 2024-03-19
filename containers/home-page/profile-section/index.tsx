import { Profile } from '@/components/Profile';
import { IprofileProps } from '@/types';
import React from 'react';

export const ProfileSection: React.FC<IprofileProps> = ({ name, avatar }) => {
  return (
    <section
      id='profile-section'
      className='mb-2 flex w-full justify-end px-11 py-6'
    >
      <Profile name={name} avatar={avatar} />
    </section>
  );
};
