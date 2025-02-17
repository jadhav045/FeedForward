import { User } from "../types/auth.types";

// src/utils/storage.ts
const TOKEN_KEY = 'feedforward_token';
const USER_KEY = 'feedforward_user';

export const storage = {
  getToken: () => {
    const token = localStorage.getItem(TOKEN_KEY);
    console.log("🚀 ~ file: storage.ts ~ line 7 ~ getToken: ~ token", token);
    return token ? token : null;  
  },
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clearToken: () => localStorage.removeItem(TOKEN_KEY),
  
  getUser: () => {
    const user = localStorage.getItem(USER_KEY);
    console.log("🚀 ~ file: storage.ts ~ line 15 ~ getUser: ~ user", user);
    return user ?  JSON.parse(user) : null;
  },

  setUser: (user: User) => localStorage.setItem(USER_KEY, JSON.stringify(user)),
  clearUser: () => localStorage.removeItem(USER_KEY),
  
  clearAll: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
};