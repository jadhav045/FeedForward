// src/types/auth.ts
export type Role = 'admin' | 'ngo' | 'donor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}