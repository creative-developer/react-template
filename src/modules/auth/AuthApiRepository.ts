import { AbstractApiRepository } from '~/base/api/AbstractApiRepository';

import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';

export class AuthApiRepository extends AbstractApiRepository {
  register = (data: RegisterDto) => {
    return this.apiClient.post({ url: `/auth/registration`, data });
  };

  login = (data: LoginDto) => {
    return this.apiClient.post({ url: `/auth/login`, data });
  };

  logout = () => {
    return this.apiClient.post({ url: `/auth/logout` });
  };
}
