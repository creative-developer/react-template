import { Dto } from '~/base/Dto';
import { modelFactory } from '~/base/ModelFactory';

import { AuthApiRepository } from './AuthApiRepository';
import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';
import { LoginForm } from './forms/LoginForm';
import { RegisterForm } from './forms/RegisterForm';
import { SuccessAuth } from './models/SuccessAuth';

export class AuthService {
  private authApi: AuthApiRepository;

  constructor() {
    this.authApi = new AuthApiRepository();
  }

  register = async (form: RegisterForm): Promise<SuccessAuth> => {
    const registerDto = Dto.populate(RegisterDto, { ...form });
    const { data } = await this.authApi.register(registerDto);
    return modelFactory.create<SuccessAuth>(SuccessAuth, data.data);
  };

  login = async (form: LoginForm): Promise<SuccessAuth> => {
    const loginDto = Dto.populate(LoginDto, { ...form });
    const { data } = await this.authApi.login(loginDto);
    return modelFactory.create<SuccessAuth>(SuccessAuth, data.data);
  };

  logout = () => {
    return this.authApi.logout();
  };
}
