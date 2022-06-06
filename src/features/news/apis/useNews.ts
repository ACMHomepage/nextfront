import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';

interface NewsByIdData {
  newsById: {
    id: number;
    title: string;
    imageUrl: string;
    tagList: string[];
    content: string;
  }
}

interface NewsByIdVars {
  newsId: number;
}

const NEWS_BY_ID_QUERY = gql`
  query newsById($newsId: Int!) {
    newsById(newsId: $newsId) {
      id
      title
      imageUrl
      tagList
      content
    }
  }
`;

const useNews = (newsId: number) => {
  const queryResult = useQuery<NewsByIdData, NewsByIdVars>(
    NEWS_BY_ID_QUERY,
    { variables: { newsId } }
  );

  const news = useMemo(() => {
    return queryResult.data?.newsById;
  }, [queryResult]);

  return [news, queryResult] as [typeof news, typeof queryResult];
}

export default useNews;

export type { NewsByIdData, NewsByIdVars };