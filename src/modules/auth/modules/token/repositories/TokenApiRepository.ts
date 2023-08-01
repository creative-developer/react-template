import { AbstractApiRepository } from '~/base/api/AbstractApiRepository';

export class TokenApiRepository extends AbstractApiRepository {
  setAccessToken = (token: string) => {
    this.apiClient.setAccessToken(token);
  };

  clearAccessToken = () => {
    this.apiClient.clearAccessToken();
  };
}
