import { Static, Type } from '@sinclair/typebox';

export const UserInput = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: 'email' })),
  password: Type.String(),
});

export const UserFillAllQuery = Type.Object({
  actived: Type.Optional(Type.Boolean()),
});

export type UserInputType = Static<typeof UserInput>;
export type UserFillAllQueryType = Static<typeof UserFillAllQuery>;
