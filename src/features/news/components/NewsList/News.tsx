import Image from 'next/image';
import { useRouter } from 'next/router';

import { url as newsUrl } from 'pages/news/[newsId]';

import TagList from 'src/features/news/components/TagList';

import styles from './News.module.scss';

interface NewsProps {
  news: {
    id: number;
    title: string;
    imageUrl: string;
    tagList: string[];
  }
}

const News = (props: NewsProps) => {
  const { news } = props;
  const router = useRouter();

  return (
    <div
      className={styles.news}
      onClick={() => router.push(newsUrl({ newsId: news.id }))}
    >
      <div className={styles.imageWrapper}>
        <Image src={news.imageUrl} layout="fill" className={styles.image} />
      </div>
      <div className={styles.leftPart}>
        <div className={styles.title}>{news.title}</div>
        <div className={styles.tagList}>
          <TagList value={news.tagList} />
        </div>
      </div>
    </div>
  )
};

export default News;