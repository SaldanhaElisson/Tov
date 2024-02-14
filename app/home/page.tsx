import { SectionPlayListVideos } from '@/containers/HomePage/SectionPlayListVideos';
import { SectionTrack } from '@/containers/HomePage/SectionTrack';

export default function Home() {
  return (
    <section id='home-section' className='flex h-[90%] gap-6'>
      <SectionTrack />
      <SectionPlayListVideos />
    </section>
  );
}
