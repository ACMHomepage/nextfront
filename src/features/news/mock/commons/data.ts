import filter from 'lodash/filter';

interface News {
  id: number;
  title: string;
  content: string;
  tagList: string[];
  imageUrl: string;
}

const data = {
  _id: 0,
  news: [] as News[],
}

const addNews = (news: Omit<News, 'id'>) => {
  data._id ++;
  const realNews: News = {
    id: data._id,
    ...news,
  };
  data.news.push(realNews);
  return realNews;
}

const getNewsById = (newsId: number) => {
  const result = filter(data.news, news => news.id === newsId);

  return result[0];
}

const getNewsList = () => {
  return data.news;
}

export { addNews, getNewsById, getNewsList };