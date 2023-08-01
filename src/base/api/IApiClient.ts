/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IApiClient {
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
  setCredentials: () => void;

  get: <T extends {}>(config: any) => any;
  post: <T extends {}>(config: any) => any;
  put: <T extends {}>(config: any) => any;
  delete: <T extends {}>(config: any) => any;
}
