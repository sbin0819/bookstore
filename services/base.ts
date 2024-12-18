// services/base.ts
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export const BASE_API_URL =
  process.env.NEXT_PUBLIC_ENV === 'production'
    ? 'https://bookstore-server-production-d010.up.railway.app'
    : 'http://localhost:4000';

class BaseApiInstance {
  private axiosInstance: AxiosInstance;
  private isRefreshing: boolean = false;
  private refreshSubscribers: Array<(token: string) => void> = [];
  private accessToken: string | null = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_API_URL,
      timeout: 1000 * 10,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Enable sending cookies (for refresh_token)
    });

    // Request interceptor to attach the access token
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers = config.headers ?? {};
          config.headers['Authorization'] = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle 401 errors and refresh token
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;

        if (
          originalRequest &&
          error.response?.status === 401 &&
          !originalRequest._retry &&
          !originalRequest.url?.includes('/auth/refresh')
        ) {
          originalRequest._retry = true;

          if (this.isRefreshing) {
            return new Promise((resolve) => {
              this.refreshSubscribers.push((token: string) => {
                originalRequest.headers['Authorization'] = `Bearer ${token}`;
                resolve(this.axiosInstance(originalRequest));
              });
            });
          }

          this.isRefreshing = true;

          try {
            const response = await this.axiosInstance.post('/auth/refresh');
            const newAccessToken = response.data.access_token;

            this.setAccessToken(newAccessToken);

            this.refreshSubscribers.forEach((callback) =>
              callback(newAccessToken)
            );
            this.refreshSubscribers = [];

            return this.axiosInstance(originalRequest);
          } catch (refreshError) {
            this.refreshSubscribers = [];
            // Optionally, redirect to login
            this.clearAccessToken();
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        return Promise.reject(error);
      }
    );
  }

  // Method to set the access token
  setAccessToken(token: string) {
    this.accessToken = token;
  }

  // Method to clear the access token
  clearAccessToken() {
    this.accessToken = null;
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
