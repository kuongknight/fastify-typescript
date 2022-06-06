import { FastifyPluginAsync } from 'fastify';
import { UserInput, UserInputType } from './dto/user.input';
import { register } from './user.handlers';
import * as UsersService from '../../core/services/users.service';
import { User } from '../../core/models/user.model';

export const UserRoutes: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  const postUserSchema = {
    schema: {
      description: 'Register a new User',
      tags: ['User'],
      summary: 'Register a new User',
      body: UserInput,
    },
  };
  fastify.post<{ Body: UserInputType; Reply: User }>(
    '/users',
    postUserSchema,
    async (req): Promise<User> => {
      // Has type UserInputType
      const userInput = req.body;
      return register(userInput);
    },
  );

  const findAllUsersSchema = {
    schema: {
      description: 'Find all users',
      tags: ['User'],
      summary: 'Find all users',
      body: undefined,
    },
  };
  fastify.get<{ Reply: User[] }>(
    '/users',
    findAllUsersSchema,
    async function (): Promise<User[]> {
      return UsersService.findAll();
    },
  );
};
