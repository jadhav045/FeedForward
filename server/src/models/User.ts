import { isString } from 'jet-validators';

import schema from '@src/util/schema';
import { isRelationalKey } from '@src/util/validators';
import mongoose, { Schema, Document,Model } from 'mongoose';
import e from 'express';

/******************************************************************************
                                  Types
******************************************************************************/

export interface IUser extends Document {
  id: number;
  name: string;
  email: string;
  // created: Date;
}

/******************************************************************************
                                 Setup
******************************************************************************/

const UserSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  // Add other fields as needed
});

/******************************************************************************
                                Methods
******************************************************************************/

/**
 * Validate user data.
 */
UserSchema.statics.test = function (user: any): IUser {
  if (typeof user !== 'object' || !user) {
    throw new Error('Invalid user object');
  }
  if (typeof user.name !== 'string' || typeof user.email !== 'string') {
    throw new Error('Invalid user properties');
  }
  return user as IUser;
};

export interface IUserModel extends Model<IUser> {
  test(user: any): IUser;
}


/******************************************************************************
                                Export default
******************************************************************************/

export const User = mongoose.model<IUser,IUserModel>('User', UserSchema);
export default User;
// export default 
// export test;