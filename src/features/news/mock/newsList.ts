import { graphql } from 'msw';

import { NewsListData, NewsListVars } from 'src/features/news/apis/useNewsList';

import { getNewsList } from './commons/data';

const newsList = graphql.query<NewsListData, NewsListVars>(
  'newsList',
  (req, res, ctx) => {
    const newsList = getNewsList();
    const result = res(
      ctx.data({ newsList }),
    );
    
    console.log('[Mock] return', result);
    return result;
  }
)

export default newsList;