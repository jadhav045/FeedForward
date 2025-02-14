
import mongoose, { Schema, Document, Model } from 'mongoose';

/******************************************************************************
                                  Types
******************************************************************************/

export interface IUser extends Document {
  id: number;
  // name: string;
  email: string;
  username: string;
  mobileNo: string;
  role: string;
  password: string;
  // created: Date;
}

/******************************************************************************
                                 Setup
******************************************************************************/

const UserSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  // name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  mobileNo: { type: String, required: false },
  role: { type: String, required: true },
  password: { type: String, required: true },
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
  if (typeof user.username !== 'string' || user.username.trim() === '') {
    throw new Error('Invalid username');
  }
  if (typeof user.email !== 'string' || user.email.trim() === '') {
    throw new Error('Invalid email');
  }
  if (typeof user.role !== 'string' || user.role.trim() === '') {
    throw new Error('Invalid role');
  }
  if (typeof user.password !== 'string' || user.password.trim() === '') {
    throw new Error('Invalid password');
  }
  return user as IUser;
};

export interface IUserModel extends Model<IUser> {
  test(user: any): IUser;
}

/******************************************************************************
                                Export default
******************************************************************************/

export const User = mongoose.model<IUser, IUserModel>('users', UserSchema);
export default User;