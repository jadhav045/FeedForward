import HttpStatusCodes from '@src/common/HttpStatusCodes';
import UserService from '@src/services/UserService';
import { IReq, IRes } from './common';
import { AuthResponse } from '../types/auth.types';
import { profile } from 'console';

/******************************************************************************
                                Functions
******************************************************************************/

async function register(req: IReq, res: IRes) {
  const user = req.body;
  const response = await UserService.register(user) as AuthResponse;

  if (response.status === 200) {
    return res.status(HttpStatusCodes.OK).json({
      data: { 
        user: response.user, 
        token: response.token 
      },
      status: 200
    });
  } else {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      data: { 
        message: response.message || 'Registration failed' 
      },
      status: 400
    });
  }
}

async function login(req: IReq, res: IRes) {
  const user = req.body;
  const response = await UserService.login(user) as AuthResponse;

  if (response.status === 200) {
    return res.status(HttpStatusCodes.OK).json({
      data: { 
        user: response.user, 
        token: response.token 
      },
      status: 200
    });
  } else {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      data: { 
        message: response.message || 'Login failed' 
      },
      status: 400
    });
  }
}
async function profile(req: IReq, res: IRes) {
  const user = req.body;
  const response = await UserService.profile(user) as AuthResponse;

  if (response.status === 200) {
    return res.status(HttpStatusCodes.OK).json({
      data: { 
        user: response.user, 
        token: response.token 
      },
      status: 200
    });
  } else {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      data: { 
        message: response.message || 'Login failed' 
      },
      status: 400
    });
  }
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  register,
  login,
  profile,
} as const;