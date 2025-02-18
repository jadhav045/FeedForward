import { io, Socket } from 'socket.io-client';

export const socketConfig = {
  url: process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001',
  options: {
    transports: ['websocket'],
    autoConnect: false
  }
};