import Link from 'next/link';

import Menu from "src/commons/components/Menu";
import Avatar from "src/features/user/components/Avatar";

import useSelf from "src/features/auth/apis/useSelf";

import { url as profileUrl } from 'pages/profile';

import styles from './ProfileMenuItem.module.scss';

const ProfileMenuItemList = () => {
  const self = useSelf();

  if (self === undefined) {
    return null;
  }

  return (
    <>
      <Link href={profileUrl()}>
        <Menu.Item className={styles.profileItem}>
          <Avatar self size="lg" />
          {self.nickname}
        </Menu.Item>
      </Link>
      <Menu.Divider />
    </>
  );
};

export default ProfileMenuItemList;