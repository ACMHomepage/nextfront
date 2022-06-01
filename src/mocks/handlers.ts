import { signIn, register, signOut } from 'src/features/auth/mock';

const handers = [
  signIn,
  register,
  signOut,
];

export default handers;