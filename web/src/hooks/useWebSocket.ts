// web/src/hooks/useWebSocket.ts
import { useEffect,useState } from 'react';
import { io } from 'socket.io-client';
import { useProfile } from './pages/useProfile';



const useWebSocket = () => {
  const {user}=useProfile();
    const [notifications, setNotifications] = useState<string[]>([]);
  useEffect(() => {
    const socket = io('http://localhost:4001');

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('notification', (message) => {
      console.log(typeof(message));
      // console.log('Received notification:', message);
      message=JSON.parse(message)
      const receivers=message.to
      console.log(receivers);
      console.log(message.message)
      if (receivers.includes(user?.email)) {
        console.log(user?.email)
        setNotifications((prev) => [...prev, message.message]);
      }
      console.log(notifications);
     
      // Handle the notification (e.g., display it to the user)
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return notifications;
};

export default useWebSocket;