import { useRouter } from 'next/router';

import { url as indexUrl } from 'pages/index';

import Nav from 'src/features/basic/components/Nav';

import useSelf from 'src/features/auth/apis/useSelf';

const CreateNews = () => {
  const self = useSelf();
  const router = useRouter();

  if (self === undefined || !self.isAdmin) {
    router.push(indexUrl());
  }
  return (
    <>
      <Nav />
      <div>Create News</div>
    </>
  )
}

export default CreateNews;