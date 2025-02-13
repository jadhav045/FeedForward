// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from '../features/auth/authSlice';
import themeReducer from '../features/themeSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;