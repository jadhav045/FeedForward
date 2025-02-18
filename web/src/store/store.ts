// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import themeReducer from '../features/themeSlice';
import profileReducer from '../features/profileSlice';
import historyReducer from '../features/historySlice';
import postReducer from '../features/postSlice';
import socketReducer from '../features/socketSlice';
import { socketMiddleware } from '../middleware/socketMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    profile: profileReducer,
    history: historyReducer,
    posts: postReducer,
    socket: socketReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore socket-related actions in serializable check
        ignoredActions: ['socket/setSocket']
      }
    }).concat(socketMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;