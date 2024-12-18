// services/base.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const BASE_API_URL =
  process.env.NEXT_PUBLIC_ENV === 'production'
    ? 'https://bookstore-server-production-d010.up.railway.app'
    : 'http://localhost:4000';

class BaseApiInstance {
  private axiosInstance: AxiosInstance;
  private token: string | null = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_API_URL,
      timeout: 1000 * 10,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Not needed since we're using Authorization header
    });

    // Interceptor to include Authorization header
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers = config.headers || {};
          config.headers['Authorization'] = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Optional: Handle responses globally (e.g., token refresh on 401)
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        // Handle token refresh logic here if needed
        return Promise.reject(error);
      }
    );
  }

  // Method to set the token manually (optional)
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('access_token', token);
  }

  // Method to clear the token (e.g., on logout)
  clearToken() {
    this.token = null;
    localStorage.removeItem('access_token');
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      endpoint,
      options
    );
    return response.data;
  }

  async post<T, U = unknown>(
    endpoint: string,
    data?: U,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(
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
    const response: AxiosResponse<T> = await this.axiosInstance.put(
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
    const response: AxiosResponse<T> = await this.axiosInstance.delete(
      endpoint,
      options
    );
    return response.data;
  }
}

export const baseApiInstance = new BaseApiInstance();
