// src/routes/DocsRoutes.ts
import { IReq, IRes } from './common';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { apiDocs } from '../config/api-docs';
import path from 'path';

async function getDocs(_: IReq, res: IRes) {
  return res.status(HttpStatusCodes.OK).json({
    data: apiDocs,
    status: HttpStatusCodes.OK,
  });
}

// Serve the docs HTML page
async function getDocsPage(_: IReq, res: IRes) {
  res.sendFile(path.join(__dirname, '../public/docs.html'));
}

export default {
  getDocs,
  getDocsPage,
} as const;