import { IUser, User } from '@src/models/User';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';

/******************************************************************************
                                Functions
******************************************************************************/

let db: any;

(async () => {
  db = await orm.connectDb();
})();

async function getOne(email: string): Promise<IUser | null> {
  try {
    const user = await User.findOne({ email }).exec();
    return user || null;
  } catch (error) {
    console.error("❌ Error finding user:", error);
    throw new Error("Internal Server Error");
  }
}

async function persists(id: number): Promise<boolean> {
  try {
    const user = await User.findById(id).exec();
    return !!user;
  } catch (error) {
    console.error("❌ Error checking user existence:", error);
    throw new Error("Internal Server Error");
  }
}

async function getAll(): Promise<IUser[]> {
  try {
    return await User.find().exec();
  } catch (error) {
    console.error("❌ Error getting all users:", error);
    throw new Error("Internal Server Error");
  }
}

async function add(user: IUser): Promise<void> {
  try {
    user.id = getRandomInt();
    const newUser = new User(user);
    await newUser.save();
  } catch (error) {
    console.error("❌ Error adding user:", error);
    throw new Error("Internal Server Error");
  }
}

async function update(user: IUser): Promise<void> {
  try {
    const existingUser = await User.findById(user.id).exec();
    if (existingUser) {
      await User.findByIdAndUpdate(user.id, user).exec();
    } else {
      throw new Error(`User with id ${user.id} not found.`);
    }
  } catch (error) {
    console.error("❌ Error updating user:", error);
    throw new Error("Internal Server Error");
  }
}

async function delete_(id: number): Promise<{ success: boolean; message: string }> {
  try {
    const result = await User.findByIdAndDelete(id).exec();
    if (result) {
      return { success: true, message: `User with id ${id} deleted successfully.` };
    } else {
      return { success: false, message: `User with id ${id} not found.` };
    }
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    throw new Error("Internal Server Error");
  }
}

async function deleteAllUsers(): Promise<void> {
  try {
    await User.deleteMany({}).exec();
    console.log("🗑️ Deleted all users");
  } catch (error) {
    console.error("❌ Error deleting all users:", error);
    throw new Error("Internal Server Error");
  }
}

async function insertMult(users: IUser[] | readonly IUser[]): Promise<void> {
  try {
    await User.insertMany(users);
    console.log("👥 Inserted multiple users");
  } catch (error) {
    console.error("❌ Error inserting multiple users:", error);
    throw new Error("Internal Server Error");
  }
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
  deleteAllUsers,
  insertMult,
} as const;
