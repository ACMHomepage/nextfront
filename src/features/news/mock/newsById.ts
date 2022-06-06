import { graphql } from 'msw';

import { NewsByIdData, NewsByIdVars } from 'src/features/news/apis/useNews';

import { getNewsById } from './commons/data';

const newsById = graphql.query<NewsByIdData, NewsByIdVars>(
  'newsById',
  (req, res, ctx) => {
    const { newsId } = req.variables;
    const news = getNewsById(newsId);
    const result = res(
      ctx.data({ newsById: news }),
    );

    console.log('[Mock] Get', newsId, 'return', result);
    return result;
  }
)

export default newsById;