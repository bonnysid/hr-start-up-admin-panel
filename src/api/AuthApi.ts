import { instance } from '@src/api/base';

export class AuthApi {
  static login(username: string, password: string) {
    return instance.post('/admin/login', { username, password })
  }
}
