import { useMemo } from 'react';
import useNews from 'src/features/news/apis/useNews';

import styles from './News.module.scss';
import NewsError from './NewsError';
import NewsLoading from './NewsLoading';
import NewsMain from './NewsMain';

interface NewsProps {
  newsId: number;
}

const News = (props: NewsProps) => {
  const { newsId } = props;
  const [news, { loading, error }] = useNews(newsId);

  const result = useMemo(() => {
    if (loading) {
      return <NewsLoading />;
    } else if (error) {
      return <NewsError />;
    } else {
      return <NewsMain news={news!} />;
    }
  }, [news, loading, error]);

  return (
    <div className={styles.news}>
      { result }
    </div>
  );
}

export default News;