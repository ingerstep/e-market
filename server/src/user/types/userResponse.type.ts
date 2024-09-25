import { User } from '../user.entity';

export type UserResponseType = Omit<User, 'hashPassword' | 'password'> & {
  token: string;
};
