import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create();

export const get = async <T = any>(
  endpoint: string,
  config?: AxiosRequestConfig,
) => {
  const { data } = await api.get<T>(endpoint, { ...config });

  return data;
};

export const post = async <T = any>(
  endpoint: string,
  config?: AxiosRequestConfig,
) => {
  const { data } = await api.post<T>(endpoint, { ...config });

  return data;
};

export const put = async <T = any>(
  endpoint: string,
  config?: AxiosRequestConfig,
) => {
  const { data } = await api.put<T>(endpoint, { ...config });

  return data;
};

export const remove = async <T = any>(
  endpoint: string,
  config?: AxiosRequestConfig,
) => {
  const { data } = await api.delete<T>(endpoint, { ...config });

  return data;
};
