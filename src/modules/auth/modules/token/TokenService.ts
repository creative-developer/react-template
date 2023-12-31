import { TokenApiRepository } from './repositories/TokenApiRepository';
import { TokenLocalRepository } from './repositories/TokenLocalRepository';

export class TokenService {
  private tokenLocal: TokenLocalRepository;
  private tokenApi: TokenApiRepository;

  constructor() {
    this.tokenLocal = new TokenLocalRepository();
    this.tokenApi = new TokenApiRepository();
  }

  saveToken = (token: string) => {
    this.tokenApi.setAccessToken(token);
    this.tokenLocal.set(token);
  };

  deleteToken = () => {
    this.tokenApi.clearAccessToken();
    this.tokenLocal.remove();
  };

  getToken = () => {
    const token = this.tokenLocal.get();
    return token ? token : '';
  };
}
