import { graphql } from 'msw';

import { AddNewsData, AddNewsVars } from 'src/features/news/apis/usePostNews';

import { addNews as addNewsFn } from './commons/data';

const addNews = graphql.mutation<AddNewsData, AddNewsVars>(
  'addNews',
  (req, res, ctx) => {
    const { news: newsBase } = req.variables;
    const news = addNewsFn(newsBase);
    const result = res(
      ctx.data({ addNews: { id: news.id } }),
    );

    console.log('[Mock] Get', newsBase, 'return', result);
    return result;
  }
)

export default addNews;