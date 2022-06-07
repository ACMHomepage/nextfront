import { useRouter } from 'next/router';

import { url as newsIndexUrl } from 'pages/news/index';
import Button from 'src/commons/components/Button';
import Flex from 'src/commons/layouts/Flex';
import useNewsList from 'src/features/news/apis/useNewsList';

import News from './News';

import styles from './NewsList.module.scss';

interface NewsListProps {
  onlyTag?: Set<string>;
  hasBar?: boolean;
}

const NewsList = (props: NewsListProps) => {
  const {
    onlyTag = new Set(),
    hasBar = true
  } = props;

  console.log(onlyTag);

  const [newsList] = useNewsList();
  const router = useRouter();

  return (
    <div className={styles.newsList}>
      {
        hasBar
          ? (
            <div className={styles.bar}>
              <span>Recent News</span>
              <Flex flex={1} />
              <Button
                variant="outline"
                onClick={() => router.push(newsIndexUrl())}
              >
                Read more
              </Button>
            </div>
          )
          : null
      }
      <div className={styles.newsListContent}>
        {
          newsList
            ?.filter(news => {
              let matched = true;
              onlyTag.forEach(tag => {
                matched = matched && news.tagList.includes(tag);
              })
              return matched;
            })
            .map(news => <News news={news}/>)
        }
        {
          newsList?.length === 0
            ? <>No news...</>
            : null
        }
      </div>
    </div>
  );
}

export default NewsList;