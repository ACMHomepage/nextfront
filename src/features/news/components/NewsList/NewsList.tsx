import useNewsList from '../../apis/useNewsList';

import News from './News';

import styles from './NewsList.module.scss';

const NewsList = () => {
  const [newsList] = useNewsList();

  return (
    <div className={styles.newsList}>
      {
        newsList?.map(news => <News news={news}/>)
      }
    </div>
  );
}

export default NewsList;