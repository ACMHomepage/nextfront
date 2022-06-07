import { signIn, register, signOut } from 'src/features/auth/mock';
import { pictureBedApiPost, addNews, newsById, newsList } from 'src/features/news/mock';

const handers = [
  signIn,
  register,
  signOut,
  pictureBedApiPost,
  addNews,
  newsById,
  newsList
];

export default handers;