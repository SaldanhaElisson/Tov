import { SectionActions } from '@/containers/home-page/actions-section';
import { SectionTrack } from '@/containers/home-page/track-section';

export default function Home() {
  return (
    <section id='home-section' className='flex h-[90%] gap-6'>
      <SectionTrack />
      <SectionActions />
    </section>
  );
}
