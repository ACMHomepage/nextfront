import filter from 'lodash/filter';

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

const addUser = (user: Omit<User, "id" | "isAdmin">) => {
  try {
    const anotherUser = getUserByEmail(user.email);
  } catch (error) {
    data._id++;
    data.users.push({
      id: data._id,
      isAdmin: data.users.length === 0,
      ...user,
    })
    return data.users.at(-1) as User;
  }
  throw new Error(`The email ${user.email} is existed.`);
}

const getUserByEmail = (email: string) => {
  const users = filter(data.users, user => user.email === email);
  if (users.length === 0) {
    throw new Error(`The email ${email} is not existed.`);
  } else if (users.length !== 1) {
    throw new Error('I am teapot');
  }
  return users[0];
}

export { addUser, getUserByEmail };
export type { User };