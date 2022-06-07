import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';

interface NewsListData {
  newsList: {
    id: number;
    title: string;
    imageUrl: string;
    tagList: string[];
  }[];
}

interface NewsListVars { }

const NEWS_LIST_QUERY = gql`
  query newsList {
      newsList {
      id
      title
      imageUrl
      tagList
    }
  }
`;

const useNewsList = () => {
  const queryResult = useQuery<NewsListData, NewsListVars>(
    NEWS_LIST_QUERY,
  );

  const newsList = useMemo(() => {
    return queryResult.data?.newsList;
  }, [queryResult]);

  return [newsList, queryResult] as [typeof newsList, typeof queryResult];
};

export default useNewsList;

export type { NewsListData, NewsListVars };