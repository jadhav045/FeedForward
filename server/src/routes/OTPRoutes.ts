import { IReq, IRes } from './common';
import { otpService } from '../services/OTPService';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { OTPRequest, OTPVerifyRequest } from '../types/otp.types';

// Add validators like other routes
const Validators = {
  send: (body: unknown): OTPRequest => {
    const data = body as OTPRequest;
    if (!data.identifier || !data.type) {
      throw new Error('Missing required fields');
    }
    if (!['email', 'mobile'].includes(data.type)) {
      throw new Error('Invalid type');
    }
    return data;
  },
  verify: (body: unknown): OTPVerifyRequest => {
    const data = body as OTPVerifyRequest;
    if (!data.identifier || !data.otp) {
      throw new Error('Missing required fields');
    }
    return data;
  }
};

async function sendOTP(req: IReq, res: IRes) {
  try {
    const data = Validators.send(req.body);
    const response = await otpService.sendOTP(data.identifier, data.type);

    if (response.success) {
      return res.status(HttpStatusCodes.OK).json({
        data: response,
        status: HttpStatusCodes.OK
      });
    }

    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      data: response,
      status: HttpStatusCodes.BAD_REQUEST
    });
  } catch (error) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      data: {
        success: false,
        message: error.message
      },
      status: HttpStatusCodes.BAD_REQUEST
    });
  }
}

async function verifyOTP(req: IReq, res: IRes) {
  try {
    const data = Validators.verify(req.body);
    const response = await otpService.verifyOTP(data.identifier, data.otp);

    if (response.success) {
      return res.status(HttpStatusCodes.OK).json({
        data: response,
        status: HttpStatusCodes.OK
      });
    }

    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      data: response,
      status: HttpStatusCodes.BAD_REQUEST
    });
  } catch (error) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      data: {
        success: false,
        message: error.message
      },
      status: HttpStatusCodes.BAD_REQUEST
    });
  }
}

export default {
  sendOTP,
  verifyOTP
} as const;