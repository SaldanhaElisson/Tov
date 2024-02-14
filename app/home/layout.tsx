import { Logo } from '@/components/Logo';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=' h-screen items-center justify-between px-7 pb-16 pt-4 '>
      <Logo />
      {children}
    </main>
  );
}
