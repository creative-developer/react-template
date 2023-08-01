import { AxiosRequestConfig } from 'axios';

import { IApiConfig, IApisResponse } from '../ApiInterfaces';

export interface IAxiosConfig extends IApiConfig {
  data?: Object;
  config?: AxiosRequestConfig;
}

export interface IAxiosResponse<T> extends IApisResponse<T> {}
