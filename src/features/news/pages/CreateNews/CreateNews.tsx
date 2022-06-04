import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { url as indexUrl } from 'pages/index';

import Nav from 'src/features/misc/components/Nav';
import Editor from 'src/features/news/components/Editor';

import useSelf from 'src/features/auth/apis/useSelf';

import styles from './CreateNews.module.scss';

const CreateNews = () => {
  const self = useSelf();
  const router = useRouter();

  useEffect(() => {
    if (self === undefined || !self.isAdmin) {
      router.push(indexUrl());
    }
  }, [self]);

  return (
    <>
      <Nav />
      <div className={styles.createNews}>
        <div className={styles.editorWrapper}>
          <Editor />
        </div>
      </div>
    </>
  )
}

export default CreateNews;