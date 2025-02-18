import { IReq, IRes } from './common';
import HttpStatusCodes from '@src/common/HttpStatusCodes';


async function upload(req: IReq, res: IRes) {
    console.log('req for uploading on cloudinary');
    try {
        const { file } = req.body;
        console.log(req.body);
        // console.log('file', file);      
      
  
      
    } catch (error) {
      
    }
  }


export default {
    upload,
} as const;