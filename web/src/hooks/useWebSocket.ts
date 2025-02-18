// web/src/hooks/useWebSocket.ts
import { useEffect,useState } from 'react';
import { io } from 'socket.io-client';

const useWebSocket = () => {
    const [notifications, setNotifications] = useState<string[]>([]);
  useEffect(() => {
    const socket = io('http://localhost:4001');

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('notification', (message) => {
      console.log('Received notification:', message);
      setNotifications((prev) => [...prev, message]);
      // Handle the notification (e.g., display it to the user)
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return notifications;
};

export default useWebSocket;