import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

const url = ({ newsId }: { newsId: number }) => `/news/${newsId}`;

const News: NextPage = () => {
  const router = useRouter();
  const { newsId } = router.query;

  return (
    <>
      <Head>
        <title>news title... | ACM Homepage</title>
      </Head>
      { newsId }
    </>
  )
}

export default News;

export { url };