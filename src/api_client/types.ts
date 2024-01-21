import { AxiosRequestConfig } from "axios";

export interface GetHttpAction {
  url?: string;
  config?: AxiosRequestConfig<any>;
}

export interface PostHttpAction {
  url: string;
  data?: any;
  config?: AxiosRequestConfig<any>;
}

export interface PatchHttpAction {
  url: string;
  data?: any;
  config?: AxiosRequestConfig<any>;
}