import { getUserSession } from '@/lib/session';
import React from 'react';

export default async function LoginPage() {
  const user = await getUserSession();

  return <main className='h-screen w-screen'>{JSON.stringify(user)}</main>;
}
