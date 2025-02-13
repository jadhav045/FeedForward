// src/features/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../types/auth';
import { storage } from '../utils/storage';

const initialState: AuthState = {
  user: storage.getUser(),
  token: storage.getToken(),
  isAuthenticated: !!storage.getToken(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,                                           // Current Redux state
      action: PayloadAction<{ user: User; token: string }> // Typed action payload
    ) => {
      // Destructure user and token from action payload
      const { user, token } = action.payload;
      
      // Update Redux state
      state.user = user;          // Set user object
      state.token = token;        // Set JWT token
      state.isAuthenticated = true; // Mark as authenticated
      
      // Persist to localStorage
      storage.setToken(token);    // Save token
      storage.setUser(user);      // Save user data
    },
    
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      storage.clearAll();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;