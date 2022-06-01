import type { NextPage } from 'next';
import Head from 'next/head';

import CreateNewsBase from 'src/features/news/pages/CreateNews';

const url = () => '/create-news';

const CreateNews: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create News | ACM Homepage</title>
      </Head>
      <CreateNewsBase />
    </>
  );
};

export default CreateNews;

export { url };