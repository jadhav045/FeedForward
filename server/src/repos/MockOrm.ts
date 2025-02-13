import jsonfile from 'jsonfile';
import mongoose from 'mongoose';

import ENV from '@src/common/ENV';
import { NodeEnvs } from '@src/common/constants';
import { IUser } from '@src/models/User';


/******************************************************************************
                                Variables
******************************************************************************/

// const DB_FILE_NAME = (
//   ENV.NodeEnv === NodeEnvs.Test 
//   ? 'database.test.json' 
//   : 'database.json'
// );

const MONGO_URI = 'mongodb+srv://mrshaktiman01:nK5Epooo7G2rk5zo@cluster0.2edlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';




/******************************************************************************
                                Types
******************************************************************************/


/******************************************************************************
                                Functions
******************************************************************************/

async function connectDb(): Promise<typeof mongoose> {
  try {
    const db = await mongoose.connect(MONGO_URI);
    console.log("🗄️ Successfully connected to MongoDB");
    return db;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
}

/**
 * Fetch the json from the file.
 */
// function openDb(): Promise<IDb> {
//   return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDb>;
// }

/**
 * Update the file.
 */
// function saveDb(db: IDb): Promise<void> {
//   return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
// }

// async function getUsers(): Promise<IUser[]> {
//   const users = await mongoose.model('User').find(); // Assuming you have a 'User' model
//   return users;
// }

// async function saveUser(user: IUser): Promise<void> {
//   const UserModel = mongoose.model('User');
//   const newUser = new UserModel(user);
//   await newUser.save();
// }


/******************************************************************************
                                Export default
******************************************************************************/

export default {
  connectDb,
  // saveUser,
} as const;
