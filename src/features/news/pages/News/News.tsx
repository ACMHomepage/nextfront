import Nav from 'src/features/misc/components/Nav';
import NewsBase from 'src/features/news/components/News';

import styles from './News.module.scss';

interface NewsProps {
  newsId: number;
}

const News = (props: NewsProps) => {
  const { newsId } = props;

  return (
    <>
      <Nav />
      <div className={styles.createNews}>
        <div className={styles.editorWrapper}>
          <NewsBase newsId={newsId} />
        </div>
      </div>
    </>
  )
}

export default News;