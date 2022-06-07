import { useMemo } from 'react';

import useNewsList from './useNewsList';

const useTagList = () => {
  const [newsList] = useNewsList();

  // TODO: Add new backend GraphQL interface.
  const result = useMemo(() => {
    const resultSet = new Set(newsList?.map(news => news.tagList).flat());
    return Array.from(resultSet);
  }, [newsList]);

  return result;
};

export default useTagList;