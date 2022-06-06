import { Static, Type } from '@sinclair/typebox';

export const LoginInput = Type.Object({
  email: Type.String({ format: 'email' }),
  password: Type.String(),
});

export type LoginInputType = Static<typeof LoginInput>;
