import { isNumber } from 'jet-validators';
import { transform } from 'jet-validators/utils';

import HttpStatusCodes from '@src/common/HttpStatusCodes';
import UserService from '@src/services/UserService';
import User from '@src/models/User';
import { IUser } from '@src/models/User';

import { parseReq, IReq, IRes } from './common';
import { stat } from 'fs';



/******************************************************************************
                                Variables
******************************************************************************/

const Validators = {
  add: parseReq({ user: User.test.bind(User) }),
  update: parseReq({ user: User.test.bind(User) }),
  delete: parseReq({ id: transform(Number, isNumber) }),
} as const;

// const validateUser = (user: any): user is IUser => {
//   const Validators = {
//     add: parseReq({ user: User.test.bind(User) }),
//     update: parseReq({ user: User.test.bind(User) }),
//     delete: parseReq({ id: transform(Number, isNumber) }),
//   } as const;
/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  console.log('getAll');
  
  const users = await UserService.getAll();
  res.status(HttpStatusCodes.OK).json({ users });
}

/**
 * Add one user.
 */
async function add(req: IReq, res: IRes) {
  const { user } = Validators.add(req.body);
  await UserService.addOne(user);
  res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq, res: IRes) {
  const { user } = Validators.update(req.body);
  await UserService.updateOne(user);
  res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const { id } = Validators.delete(req.params);
  await UserService.delete(id);
  res.status(HttpStatusCodes.OK).end();
}

/******************************************************************************
                                Export default
******************************************************************************/

async function register(req: IReq, res: IRes) {
  console.log('for register');
  // console.log(req.body);
  const user = req.body;
  
  // const { user } = Validators.add(req.body);
  console.log(user);

  const response = await UserService.register(user);
  console.log("response: ",(response));
  // console.log(response.status);
  if (response.status === 200) {
    return res.status(HttpStatusCodes.OK).json({data: { user: response.user, token: response.token },status:200});
  }
  else {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({data:{ message: response.message },status:400});
  }
  // res.status(HttpStatusCodes.OK).json({ message: 'register' });
}

async function login(req:IReq,res:IRes) {
  console.log('for login');
  const user = req.body;
  console.log(user);
  const response = await UserService.login(user);
  console.log("response: ",(response));
  if (response.status === 200) {
    return res.status(HttpStatusCodes.OK).json({data:{ user: response.user, token: response.token },status:200});
  }
  else {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({data:{ message: response.message },status:400});
  }
  
}


export default {
  getAll,
  add,
  update,
  delete: delete_,
  register,
  login,
} as const;

