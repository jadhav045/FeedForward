import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ApiResponse, ApiError } from '../types/api.types';
import { API_CONFIG } from '../config/api.config';
import { storage } from '../utils/storage';

class Api {
  private instance: AxiosInstance;
  private static baseURL = API_CONFIG.BASE_URL;

  constructor() {
    this.instance = axios.create({
      baseURL: Api.baseURL,
      timeout: API_CONFIG.TIMEOUT,
      headers: API_CONFIG.HEADERS,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        const token = storage.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => this.handleSuccess(response),
      (error: AxiosError) => this.handleError(error)
    );
  }

  private handleSuccess(response: AxiosResponse): ApiResponse<any> {
    return {
      data: response.data,
      status: response.status,
      message: 'Success',
    };
  }

  private handleError(error: AxiosError): Promise<ApiError> {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/auth/login';
    }

    return Promise.reject({
      message: error.response?.data?.message || 'An error occurred',
      status: error.response?.status || 500,
    });
  }

  public async get<T>(url: string, params?: object): Promise<ApiResponse<T>> {
    return this.instance.get(url, { params });
  }

  public async post<T>(url: string, data?: object): Promise<ApiResponse<T>> {
    return this.instance.post(url, data);
  }

  public async put<T>(url: string, data?: object): Promise<ApiResponse<T>> {
    return this.instance.put(url, data);
  }

  public async delete<T>(url: string): Promise<ApiResponse<T>> {
    return this.instance.delete(url);
  }
}

export const api = new Api();