import NewsListBase from 'src/features/news/components/NewsList';

// TODO: Try to use webp, but failed to build (`yarn build`).
// source file: ACMHomepage.kra, created by open source software `Krita`.
import styles from './NewsList.module.scss';

const NewsList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.newsList}>
        <NewsListBase  />
      </div>
    </div>
  );
}

export default NewsList;