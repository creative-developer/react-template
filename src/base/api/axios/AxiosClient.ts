import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, InternalAxiosRequestConfig } from 'axios';

import { appConfig } from '~/appConfig';
import { rootStore } from '~/base/RootStore';
import { ApiHelper } from '~/base/helpers/ApiHelper';
import { ReactNotification } from '~/base/ui/ReactNotification';

import { IApiClient } from '../IApiClient';
import { IAxiosConfig, IAxiosResponse } from './IAxiosInterfaces';

export class AxiosClient implements IApiClient {
  readonly SUCCESS_STATUSES = [200, 201, 204];
  readonly SERVER_ERROR = 500;
  readonly UNAUTHORIZED = 401;

  api: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = process.env.NODE_ENV === 'production' ? appConfig.apiUrl.prod : appConfig.apiUrl.dev;

    if (process.env.NODE_ENV === 'production' && !appConfig.apiUrl.prod) {
      console.error('env.REACT_APP_API_URL - api url is not found!');
    }

    this.setInterceptorRequest();
    this.setInterceptorResponse();
  }

  setAccessToken = (token: string) => {
    this.api.defaults.headers['Authorization'] = `Bearer ${token}`;
  };

  setCredentials = () => {
    this.api.defaults.withCredentials = true;
  };

  clearAccessToken = () => {
    this.api.defaults.headers['Authorization'] = null;
  };

  get = <T extends {}>(config: IAxiosConfig) => {
    return this.api.get<IAxiosResponse<T>>(config.url, config.config);
  };

  post = <T extends {}>(config: IAxiosConfig) => {
    return this.api.post<IAxiosResponse<T>>(config.url, config.data, config.config);
  };

  put = <T extends {}>(config: IAxiosConfig) => {
    return this.api.put<IAxiosResponse<T>>(config.url, config.data, config.config);
  };

  delete = <T extends {}>(config: IAxiosConfig) => {
    return this.api.delete<IAxiosResponse<T>>(config.url, config.config);
  };

  private setInterceptorRequest = () => {
    this.api.interceptors.request.use(
      config => {
        const newConfig: InternalAxiosRequestConfig<any> = {
          ...config,
          headers: {
            'Content-Type': 'application/json',
            'App-Platform': 'web',
            ...(config.headers as any),
          },
        };

        return newConfig;
      },
      (error: AxiosError) => {
        console.log(error, 'error');

        return Promise.reject(error);
      },
    );
  };

  private setInterceptorResponse = () => {
    this.api.interceptors.response.use(
      response => {
        if (!this.SUCCESS_STATUSES.includes(response.status)) {
          ReactNotification.showError(response.data?.message || response.data.detail || 'Unknown error');

          return Promise.reject(response);
        }

        if (response?.data?.message) {
          ReactNotification.showSuccess(response?.data?.message);
        }

        return response;
      },
      error => {
        // global showing error messages
        console.log('response error', error?.response);

        if (error?.response?.status === this.UNAUTHORIZED) {
          // Removing a token if it has expired
          rootStore.authStore.removeTokenUnlessAuthorized();
        }

        ApiHelper.getApiErrors(error?.response?.data);

        if (error.response?.status === this.SERVER_ERROR) {
          ReactNotification.showError('Server error');
        }

        return Promise.reject(error);
      },
    );
  };
}
