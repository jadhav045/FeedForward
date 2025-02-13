import { api } from '../api/api';
import { LoginRequest, LoginResponse } from '../types/auth.types';

export const authService = {
  login: async (credentials: LoginRequest) => {
    return api.post<LoginResponse>('/auth/login', credentials);
  },

  logout: async () => {
    return api.post('/auth/logout');
  },

  verifyToken: async () => {
    return api.get('/auth/verify');
  },
};