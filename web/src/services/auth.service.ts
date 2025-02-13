import { api } from '../api/api';
import { LoginFormData, LoginResponse, RegisterFormData } from '../types/auth.types';

export const authService = {
  login: async (credentials: LoginFormData) => {
    return api.post<LoginResponse>('/auth/login', credentials);
  },

  requestPasswordReset: async (username: string) => {
    return api.post('/auth/forgot-password', { username });
  },

  register: async (data: RegisterFormData) => {
    return api.post<LoginResponse>('/auth/register', data);
  },

  logout: async () => {
    return api.post('/auth/logout');
  },

  verifyToken: async () => {
    return api.get('/auth/verify');
  },
};