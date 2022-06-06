export class User {
  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
  id: string;
  email?: string;
  name: string;
  passwordHash: string;
  salt: string;
}
