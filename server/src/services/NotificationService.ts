// server/src/services/NotificationService.ts
import { Server } from 'ws';

class NotificationService {
  private wss: Server;

  constructor(wss: Server) {
    this.wss = wss;
  }

  sendNotification(email:string, message: string) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        console.log(client)
        client.send(message);
      }
    });
  }
}

export default NotificationService;