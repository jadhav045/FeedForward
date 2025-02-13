import { IUser, User } from '@src/models/User';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';
import { log } from 'node:console';
import { generateToken } from './token';
import bcrypt from 'bcrypt';
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

async function register(user: any): Promise<{ user:any,token:string, status: number }> {
  try {
    // Check if the user already exists
    console.log("🔍 Checking if user exists:", user.email);
    const existingUser = await User.findOne({ email: user.email });
    
    if (existingUser) {
      console.log("❌ User already exists:", existingUser);
      throw new Error("User already exists");
      // return { message: "User already exists" };
    }
    if (!user.id) {
      user.id = getRandomInt();
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const newUser = new User({ ...user, password: hashedPassword }); // Use .save() instead of insertOne()
    await newUser.save();
    const token = generateToken(newUser.id);

    console.log("✅ User registered successfully:", newUser);
    return { user: newUser, token:token,status:200 };
  } catch (error) {
    console.error("❌ Error registering user:");
    // throw new Error("Internal Server Error");
    return { user: null, token: "", status: 400 };
  }

}

async function login(user: any): Promise<{ user:any,token:string, status: number }> {
  try {
    // Check if the user already exists
    console.log("🔍 Checking if user exists:", user.username);
    const existing = await User.findOne({ username: user.username });
    if(existing){
      console.log("✅ User exists:", existing);
      const password = existing.password;
      const isMatch = await bcrypt.compare(user.password,existing.password);
      console.log("🔑 Password match:", isMatch);
      if (isMatch) {
        const { password: _, ...userWithoutPassword } = existing;
        const token = generateToken(existing.id);
        return { user: userWithoutPassword, token: token, status: 200 };
      }
      else{
        return { user: null, token: "", status: 400 };
      }
    }
    else{
      console.log("❌ User does not exist:", existing);
      return { user: null, token: "", status: 400 };
    } 
  } catch (error) {
    console.error("❌ Error in logging user:");
    // throw new Error("Internal Server Error");
    return { user: null, token: "", status: 400 };
  }
}

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
  deleteAllUsers,
  insertMult,
  register,
  login,
} as const;
