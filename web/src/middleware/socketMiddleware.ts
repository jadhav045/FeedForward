import { Middleware } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';
import { setConnected, setError } from '../features/socketSlice';
import { addPost } from '../features/postSlice';
import { RootState } from '../store/store';

let socket: Socket | null = null;

export const socketMiddleware: Middleware<{}, RootState> = store => next => action => {
  const { auth } = store.getState();

  // Initialize socket connection when user logs in
  if (action.type === 'auth/login/fulfilled' && !socket) {
    socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001', {
      auth: { token: auth.token },
      transports: ['websocket'],
      autoConnect: true
    });

    socket.on('connect', () => {
      store.dispatch(setConnected(true));
    });

    socket.on('disconnect', () => {
      store.dispatch(setConnected(false));
    });

    socket.on('error', (error: string) => {
      store.dispatch(setError(error));
    });

    // Post-related events
    socket.on('newPost', (post) => {
      store.dispatch(addPost(post));
    });
  }

  // Cleanup socket when user logs out
  if (action.type === 'auth/logout') {
    if (socket) {
      socket.disconnect();
      socket = null;
    }
    store.dispatch(setConnected(false));
    store.dispatch(setError(null));
  }

  return next(action);
};