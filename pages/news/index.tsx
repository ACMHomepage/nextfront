import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import NewsIndex from 'src/features/news/pages/NewsIndex';

const url = () => `/news/`;

const News: NextPage = () => {
  const router = useRouter();
  const tagList = new Set(JSON.parse(
    router.query.tagList as string ?? '[]'
  ));

  return (
    <>
      <Head>
        <title>News | ACM Homepage</title>
      </Head>
      <NewsIndex onlyTag={tagList}/>
    </>
  )
}

export default News;

export { url };