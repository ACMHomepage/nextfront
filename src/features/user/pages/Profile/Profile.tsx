import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { url as IndexUrl } from 'pages/index';

import useSelf from 'src/features/auth/apis/useSelf';
import Nav from 'src/features/misc/components/Nav';
import Avatar from 'src/features/user/components/Avatar';

import styles from './Profile.module.scss';

const Profile = () => {
  const self = useSelf();
  const router = useRouter();

  // Only run in the client page
  useEffect(() => {
    if (self === undefined) {
      router.push(IndexUrl());
    }
  }, [self]);

  if (self === undefined) {
    return null;
  }

    return (
    <>
      <Nav />
      <article className={styles.header}>
        <div className={styles.infomationWrapper}>
          <div className={styles.infomation}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <Avatar self size="xl" />
              </div>
            </div>
            <p className={styles.nickname}>
              { self.nickname }
              {
                self.isAdmin
                ? <>&nbsp;<span className={styles.admin}>Admin</span></>
                : null
              }
            </p>
            <p className={styles.email}>{ self.email }</p>
          </div>
        </div>
      </article>
    </>
  )
};

export default Profile;