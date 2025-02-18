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
  adderss: string;
  longitude: number;
  latitude: number;
  photo: string;
  fullName: string;
  profession: string;
  regNo: string;
  orgType: string;
  foodType: string;
  motive: string;
  employeeNos: string;
  history: [
    {
      eventName: string;
      photo: string;
      address: string;
      // location: string;
      longitude: number;
      latitude: number;
      details: string;
    }
  ]
  createdAt: Date;
  updatedAt: Date;
}

/******************************************************************************
                                 Setup
******************************************************************************/


const UserSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  // name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  username: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: false, unique: false },
  role: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: false },
  longitude: { type: Number, required: false },
  latitude: { type: Number, required: false },
  photo: { type: String, required: false },
  fullName: { type: String, required: false },
  profession: { type: String, required: false },
  regNo: { type: String, required: false },
  orgType: { type: String, required: false },
  foodType: { type: String, required: false },
  motive: { type: String, required: false },
  employeeNos: { type: String, required: false },
  
  history: [
    {
      eventName: { type: String, required: false },
      photo: { type: String, required: false },
      address: { type: String, required: false },
      // location: { type: String, required: false },
      longitude: { type: Number, required: false },
      latitude: { type: Number, required: false },
      details: { type: String, required: false },
    }
  ],
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: false }, // [longitude, latitude]
},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  // Add other fields as needed
});

UserSchema.index({ location: '2dsphere' });

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