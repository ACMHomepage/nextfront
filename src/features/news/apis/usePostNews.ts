import { gql, MutationResult, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface News {
  title: string;
  tagList: string[];
  content: string;
  imageUrl: string;
}

interface AddNewsVars {
  news: {
    title: string;
    content: string;
    tagList: string[];
    imageUrl: string;
  }
}

interface AddNewsData {
  addNews: {
    id: number;
  }
}

const ADD_NEWS_MUTATION = gql`
  mutation addNews($news: NewsInput!) {
    addNews(news: $news) {
      id
    }
  }
`;

type UrlFn = (news: { id: number }) => string;

interface PostNewsFnOption {
  url: UrlFn;
}

const usePostNews = () => {
  const [addNewsBase, state] = useMutation<
    AddNewsData,
    AddNewsVars
  >(ADD_NEWS_MUTATION);
  const router = useRouter();

  const [urlFn, setUrlFn] = useState<UrlFn | null>(null);

  useEffect(() => {
    console.log(state, urlFn);
    if (state.error !== undefined) return;
    if (state.loading) return;
    if (state.data === null || state.data === undefined) return;
    if (urlFn !== null) {
      const url = urlFn(state.data.addNews);
      router.push(url);
    }
  }, [state, urlFn]);

  const postNews = useCallback(
    async (news: News, option?: PostNewsFnOption) => {
      try {
        await addNewsBase({ variables: { news }});
        setUrlFn(() => (option?.url ?? null));
      } catch (error) {
        /* Do nothing */
        console.error(error);
      }
    },
    [addNewsBase]
  );

  return [postNews, state] as [typeof postNews, typeof state];
};

export default usePostNews;

export type { AddNewsData, AddNewsVars };