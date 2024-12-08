import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const OPEN_API_URL = 'https://openapi.naver.com/v1/search';
export const BASE_API_URL = 'http://localhost:3000/api';

class OpenApiInstance {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: OPEN_API_URL,
      timeout: 1000 * 10,
      headers: {
        'Content-Type': 'application/json',
        'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID!,
        'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET!,
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    });
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
    return response.data;
  }
}

class BaseApiInstance {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_API_URL,
      timeout: 1000 * 10,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
    return response.data;
  }

  async post<T, U = unknown>(
    endpoint: string,
    data?: U,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.post(
      endpoint,
      data,
      options
    );
    return response.data;
  }

  async put<T, U = unknown>(
    endpoint: string,
    data?: U,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.put(
      endpoint,
      data,
      options
    );
    return response.data;
  }

  async delete<T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.delete(
      endpoint,
      options
    );
    return response.data;
  }
}

export const baseApiInstance = new BaseApiInstance();
export const openApiInstance = new OpenApiInstance();
