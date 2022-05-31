import filter from 'lodash/filter';
import { ok, err, Result } from 'neverthrow';

interface User {
  id: number;
  email: string;
  nickname: string;
  password: string;
  isAdmin: boolean;
}

const data = {
  _id: 0,
  users: [] as User[],
}

type ErrorHandler = (message: string) => void;

const addUser = (user: Omit<User, "id" | "isAdmin">): Result<User, string> => {
  const anotherUserResult = getUserByEmail(user.email);
  if (anotherUserResult.isOk()) {
    return err(`The email ${user.email} is existed.`);
  }
  data._id++;
  data.users.push({
    id: data._id,
    isAdmin: data.users.length === 0,
    ...user,
  })
  return ok(data.users.at(-1) as User);
}

const getUserByEmail = (email: string): Result<User, string> => {
  const users = filter(data.users, user => user.email === email);
  if (users.length === 0) {
    return err(`The email ${email} is not existed.`);
  } else if (users.length !== 1) {
    return err('I am teapot');
  }
  return ok(users[0]);
}

export { addUser, getUserByEmail };
export type { User };