import Nav from 'src/features/misc/components/Nav';
import Editor from 'src/features/news/components/Editor';

import useMakeSureSelfIsAdmin from 'src/features/auth/apis/useMakeSureSelfIsAdmin';

import styles from './CreateNews.module.scss';

const CreateNews = () => {
  useMakeSureSelfIsAdmin();

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