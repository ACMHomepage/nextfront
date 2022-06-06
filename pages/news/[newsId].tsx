import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import NewsBase from 'src/features/news/pages/News';

const url = ({ newsId }: { newsId: number }) => `/news/${newsId}`;

const News: NextPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId as string;

  return (
    <>
      <Head>
        <title>news title... | ACM Homepage</title>
      </Head>
      <NewsBase newsId={parseInt(newsId)} />
    </>
  )
}

export default News;

export { url };