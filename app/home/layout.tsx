import { VerticalNavBar } from '@/containers/home-page/vertical-navbar-section';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main id='home-page' className='flex h-screen w-screen'>
      <VerticalNavBar />

      {children}
    </main>
  );
}
