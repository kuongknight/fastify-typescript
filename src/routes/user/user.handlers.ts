import { UserInputType } from './dto/user.input';
import * as UsersService from '../../core/services/users.service';

export const register = (userInput: UserInputType) => {
  return UsersService.create(userInput);
};
