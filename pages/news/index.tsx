import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import NewsIndex from 'src/features/news/pages/NewsIndex';

const url = () => `/news/`;

const News: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>News | ACM Homepage</title>
      </Head>
      <NewsIndex />
    </>
  )
}

export default News;

export { url };