import Image from 'next/image';

import Markdown from '../Markdown';
import TagList from 'src/features/news/components/TagList';

import styles from './NewsMain.module.scss';

interface NewsMainProps {
  news: {
    title: string;
    imageUrl: string;
    content: string;
    tagList: string[];
  }
}

const NewsMain = (props: NewsMainProps) => {
  const { news } = props;

  return (
    <>
      <div className={styles.image}>
        <Image src={news.imageUrl} layout="fill"/>
      </div>
      <div className={styles.title}>
        {news.title}
      </div>
      <div className={styles.tagList}>
        <TagList value={news.tagList} />
      </div>
      <Markdown className={styles.content}>
        {news.content}
      </Markdown>
    </>
  )
}

export default NewsMain;