import { signIn, register, signOut } from 'src/features/auth/mock';
import { pictureBedApiPost, addNews, newsById } from 'src/features/news/mock';

const handers = [
  signIn,
  register,
  signOut,
  pictureBedApiPost,
  addNews,
  newsById,
];

export default handers;