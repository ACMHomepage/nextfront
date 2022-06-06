import Image from 'next/image';

interface NewsMainProps {
  news: {
    title: string;
    imageUrl: string;
    content: string;
    tagList: string[];
  }
}

const NewsMain = (props: NewsMainProps) => {
  const { news } = props;

  return (
    <>
      <img src={news.imageUrl} />
      {news.title}
      {news.tagList}
      {news.content}
    </>
  )
}

export default NewsMain;