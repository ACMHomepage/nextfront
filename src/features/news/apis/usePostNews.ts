import { gql, MutationResult, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

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

interface PostNewsFnOption {
  url: (news: { id: number }) => string;
}

const usePostNews = () => {
  const [addNewsBase, state] = useMutation<
    AddNewsData,
    AddNewsVars
  >(ADD_NEWS_MUTATION);
  const router = useRouter();

  const postNews = useCallback(
    async (news: News, option?: PostNewsFnOption) => {
      try {
        await addNewsBase({ variables: { news }});
        if (state.error !== undefined) return;
        if (state.loading) return;
        if (state.data === null || state.data === undefined) return;
        if (option?.url !== undefined) {
          const url = option.url(state.data.addNews);
          console.log(url);
          router.push(url);
        }
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