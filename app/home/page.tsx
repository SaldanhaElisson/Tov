import { getUserSession } from '@/actions/session';
import { ProfileSection } from '@/containers/home-page/profile-section';

export default async function Home() {
  const user = await getUserSession();

  const name = user.name;
  const avatar = user.image;

  return (
    <section className='h-full w-full'>
      <ProfileSection name={name} avatar={avatar} />
    </section>
  );
}
