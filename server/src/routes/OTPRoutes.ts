// src/routes/OTPRoutes.ts
import { IReq, IRes } from './common';
import { otpService } from '../services/OTPService';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

async function sendOTP(req: IReq, res: IRes) {
  const { identifier, type } = req.body;
  console.log('sendOTP', identifier, type);
  
  const response = await otpService.sendOTP(identifier, type);
  
  console.log('sendOTP response', response);
  if (response.success) {
    return res.status(HttpStatusCodes.OK).json({
      data: response,
      status: HttpStatusCodes.OK,
    });
  }
  
  return res.status(HttpStatusCodes.BAD_REQUEST).json({
    data: response,
    status: HttpStatusCodes.BAD_REQUEST,
  });
}

async function verifyOTP(req: IReq, res: IRes) {
  const { identifier, otp } = req.body;
  
  const response = await otpService.verifyOTP(identifier, otp);
  
  if (response.success) {
    return res.status(HttpStatusCodes.OK).json({
      data: response,
      status: HttpStatusCodes.OK,
    });
  }
  
  return res.status(HttpStatusCodes.BAD_REQUEST).json({
    data: response,
    status: HttpStatusCodes.BAD_REQUEST,
  });
}

export default {
  sendOTP,
  verifyOTP,
} as const;