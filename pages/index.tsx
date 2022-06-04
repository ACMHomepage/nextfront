import type { NextPage } from 'next';
import Head from 'next/head';
import Index from 'src/features/misc/pages/Index';

const url = () => '/';

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

export { url };