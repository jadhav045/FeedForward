
import { AuthResponse } from '../types/auth.types';

import UserRepo from '@src/repos/UserRepo';



/******************************************************************************
                                Variables
******************************************************************************/

export const USER_NOT_FOUND_ERR = 'User not found';


async function register(user: any): Promise<AuthResponse> {
  return await UserRepo.register(user);
}
async function login(user: any): Promise<AuthResponse> {
  return await UserRepo.login(user);
}

export default {
  register,
  login,
} as const;
