import { hash, compare } from 'bcryptjs';

export class Password {
  static async toHash(password: string) {
    const passwordHash = await hash(password, 10);

    return passwordHash;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const result = await compare(suppliedPassword, storedPassword);

    return result;
  }
}
