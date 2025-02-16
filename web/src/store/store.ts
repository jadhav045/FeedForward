// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import themeReducer from '../features/themeSlice';
import profileReducer from '../features/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;