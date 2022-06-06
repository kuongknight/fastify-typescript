import { FastifyPluginAsync } from 'fastify';
import { User } from '../../core/models/user.model';
import { UserInputType } from '../user/dto/user.input';
import { LoginInput } from './dto/auth.input';

export const AuthRoutes: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  const postLocalLoginSchema = {
    schema: {
      description: 'Login a User',
      tags: ['User'],
      summary: 'Login a User',
      body: LoginInput,
    },
  };
  fastify.post<{ Body: UserInputType; Reply: User }>(
    '/auth/local/login',
    postLocalLoginSchema,
    async (): Promise<User> => {
      return new User({ name: 'admin' });
    },
  );
};
