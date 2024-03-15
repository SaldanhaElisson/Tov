import { SectionActions } from '@/containers/researcher-page/actions-section';
import { SectionTrack } from '@/containers/researcher-page/track-section';

export default function Home() {
  return (
    <section id='home-section' className='flex h-[90%] gap-6'>
      <SectionTrack />
      <SectionActions />
    </section>
  );
}
