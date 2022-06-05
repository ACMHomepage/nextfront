import { signIn, register, signOut } from 'src/features/auth/mock';
import { pictureBedApiPost, addNews } from 'src/features/news/mock';

const handers = [
  signIn,
  register,
  signOut,
  pictureBedApiPost,
  addNews,
];

export default handers;