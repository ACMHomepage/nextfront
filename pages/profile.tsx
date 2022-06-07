import type { NextPage } from 'next';
import Head from 'next/head';

import ProfilePage from 'src/features/user/pages/Profile';

const url = () => '/profile';

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | ACM Homepage</title>
      </Head>
      <ProfilePage />
    </>
  );
};

export default Profile;

export { url };