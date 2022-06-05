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
  return { id: data._id, ...news } as News;
}

export { addNews };