import Link from 'next/link';

import { url as createNewsUrl } from 'pages/create-news';

import Menu from 'src/commons/components/Menu';
import useSelf from 'src/features/auth/apis/useSelf';

const NewsMenuItemList = () => {
  const self = useSelf();

  if (self === undefined || !self.isAdmin) {
    return null;
  }
  return (
    <>
      <Link href={createNewsUrl()}>
        <Menu.Item>Create news</Menu.Item>
      </Link>
      <Menu.Divider />
    </>
  );
}

export default NewsMenuItemList;