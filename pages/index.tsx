import type { NextPage } from 'next';
import Head from 'next/head';
import Index from 'src/pages/Index';

const Url = () => '/';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ACM Homepage</title>
        {/* TODO link to icon: <link rel="icon" href="/*.ico" /> */}
      </Head>
      <Index />
    </>
  );
}

export default Home;

export { Url };