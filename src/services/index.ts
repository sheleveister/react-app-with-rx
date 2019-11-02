import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

const headers = {
  'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
};

const paramsSerializer = (obj: any) => qs.stringify(obj, { indices: false });

const instance = axios.create({
  headers,
  paramsSerializer,
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export const restGet = (url: string, config?: AxiosRequestConfig) => {
  return instance.get(url, { ...config });
};

export const restPost = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return instance.post(url, data, { ...config });
};

export const restPut = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return instance.put(url, data, { ...config });
};

export const restDelete = (url: string, config?: AxiosRequestConfig) => {
  return instance.delete(url, { ...config });
};
