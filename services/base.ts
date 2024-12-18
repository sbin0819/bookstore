// src/services/base.ts
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

export const BASE_API_URL =
  process.env.NEXT_PUBLIC_ENV === 'production'
    ? 'https://bookstore-server-production-d010.up.railway.app'
    : 'http://localhost:4000';

class BaseApiInstance {
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;

  constructor() {
    // 초기화 시 로컬 스토리지에서 access_token 가져오기
    if (typeof window !== 'undefined') {
      // 클라이언트 환경에서만 localStorage 접근
      this.accessToken = localStorage.getItem('access_token');
    }

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

    // Response interceptor to handle 401 errors
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;

        // Guard clause to ensure originalRequest is defined
        if (!originalRequest) {
          return Promise.reject(error);
        }

        // Check if error is 401 and it's not a refresh token endpoint
        if (
          error.response?.status === 401 &&
          !originalRequest.url?.includes('/auth/refresh')
        ) {
          try {
            // Attempt to refresh the token
            const response = await this.axiosInstance.post('/auth/refresh');
            const newAccessToken = response.data.access_token;

            // Update the access token
            this.setAccessToken(newAccessToken);

            // Retry the original request with the new access token
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] =
                `Bearer ${newAccessToken}`;
            } else {
              originalRequest.headers = {} as AxiosRequestHeaders;
              originalRequest.headers['Authorization'] =
                `Bearer ${newAccessToken}`;
            }

            return this.axiosInstance(originalRequest);
          } catch (refreshError) {
            // If refresh fails, clear the access token and handle logout
            this.clearAccessToken();
            return Promise.reject(refreshError);
          }
        }

        // If the error is not 401, reject without retry
        return Promise.reject(error);
      }
    );
  }

  // Method to set the access token
  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('access_token', token);
  }

  // Method to clear the access token
  clearAccessToken() {
    this.accessToken = null;
    localStorage.removeItem('access_token');
  }

  // HTTP GET method
  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      endpoint,
      options
    );
    return response.data;
  }

  // HTTP POST method
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

  // HTTP PUT method
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

  // HTTP DELETE method
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
