import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'jet-logger';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

import 'express-async-errors';

import BaseRouter from '@src/routes';

import Paths from '@src/routes/common/Paths';
import ENV from '@src/common/ENV';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { RouteError } from '@src/common/route-errors';
import { NodeEnvs } from '@src/common/constants';
import cors from 'cors';


/******************************************************************************
                                Variables
******************************************************************************/

const app = express();
const server = http.createServer(app);
// const wss = new Server({ server, });
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
  },
});

// **** Setup

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Show routes called in console during development
if (ENV.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan('dev'));
}

// Security
if (ENV.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet());
}

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);
// app.use(Paths.Users, BaseRouter);

// Add error handler
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (ENV.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
    res.status(status).json({ error: err.message });
  }
  return next(err);
});


io.on('connection', (socket) => {
  logger.info('Client connected');
  socket.on('disconnect', () => {
    logger.info('Client disconnected');
  });
  socket.on('message', (message) => {
    logger.info(`Received message => ${message}`);
  });
  
    socket.emit('notification', 'This is a test notification from server!');

  
});
server.listen(4001, () => logger.info(`webSocket started on port ${ENV.Port}`));



/******************************************************************************
                                Export default
******************************************************************************/
export {io};
export default app;
