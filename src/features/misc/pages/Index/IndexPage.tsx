import Nav from 'src/features/misc/components/Nav';

import WelcomeBar from './WelcomeBar';
import NewsList from './NewsList';

const Index = () => {
  return (
    <>
      <Nav />
      <WelcomeBar />
      <NewsList />
    </>
  );
}

export default Index;