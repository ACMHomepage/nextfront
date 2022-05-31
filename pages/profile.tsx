import type { NextPage } from 'next';

import ProfilePage from 'src/features/user/pages/Profile';

const url = () => '/profile';

const Profile: NextPage = () => {
  return <ProfilePage />;
};

export default Profile;

export { url };