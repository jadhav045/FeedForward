import { IUser, User } from '@src/models/User';
import { getRandomInt } from '@src/utils/misc';
import orm from './MongoOrm';
import { generateToken } from './token';
import bcrypt from 'bcrypt';
import { AuthResponse } from '../types/auth.types';
// import { profile } from 'console';
import { token } from 'morgan';

/******************************************************************************
                                Functions
******************************************************************************/

let db: any;

(async () => {
  db = await orm.connectDb();
})();

async function register(user: any): Promise<AuthResponse> {
  const { email, username, mobileNo } = user;
  try {
    console.log("🔍 Checking if user exists:", user);
    const existingUser = await User.findOne({
      $or: [
        { email: user.email },
        { username: user.username }
        // { mobileNo: user.mobileNo }
      ]
    });
    
    if (existingUser) {
      console.log("❌ User already exists:", existingUser);
      let message = "User already exists with this ";
      if (existingUser.email === user.email) {
        message += "email";
      } else if (existingUser.username === user.username) {
        message += "username";
      } else if (existingUser.mobileNo === user.mobileNo) {
        message += "mobile number";
      }
      throw new Error(message);
    }

    if (!user.id) {
      user.id = getRandomInt();
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    if (!mobileNo){
      user.mobileNo = " ";
    }
    const newUser = new User({ ...user, password: hashedPassword });
    await newUser.save();
    const token = generateToken(newUser.id);

    console.log("✅ User registered successfully:", newUser);
    return { 
      user: newUser, 
      token: token,
      status: 200 
    };
  } catch (error) {
    console.error("❌ Error registering user:", error);
    return { 
      user: null, 
      token: "", 
      status: 400,
      message: error.message 
    };
  }
}

async function login(user: any): Promise<AuthResponse> {
  try {
    console.log("🔍 Checking if user exists:", user);
    
    const existing = await User.findOne({
      $or: [
        { username: user.username },
        { email: user.username },
        { mobileNo: user.username }
      ]
    });
   

    console.log("🔍 Found user:", existing);
    // return;

    if(existing) {
      console.log("✅ User exists:", existing);
      const isMatch = await bcrypt.compare(user.password, existing.password);
      console.log("🔑 Password match:", isMatch);
      
      if (isMatch) {
        const { password: _, ...userWithoutPassword } = existing;
        const token = generateToken(existing.id);
        return { 
          user: userWithoutPassword, 
          token: token, 
          status: 200 
        };
      }
    }

    return { 
      user: null, 
      token: "", 
      status: 400,
      message: "Invalid credentials" 
    };

  } catch (error) {
    console.error("❌ Error in logging user:", error);
    return { 
      user: null, 
      token: "", 
      status: 400,
      message: "Invalid credentials" 
    };
  }
}
async function updateprofile(user: any): Promise<AuthResponse> {
  try {
    console.log("🔍 Checking if user exists:", user);
    const existing = await User.findOne({username: user.username});
    console.log("🔍 Found user:", existing);
    // return;  
    if(existing) {
      console.log("✅ User exists:", existing);
      // const { password: _, ...userWithoutPassword } = existing;
      const updatedUser = await User.findOneAndUpdate({username: user.username}, user, {new: true});
      if (updatedUser) {
        const { password: _, ...userWithoutPassword } = updatedUser;
        console.log("🔍 Updated user:", userWithoutPassword);
        const token = generateToken(existing.id);
        return { 
          user: userWithoutPassword, 
          token: token, 
          status: 200 
        };
      }
    }
    return { 
      user: null, 
      token: "", 
      status: 400,
      message: "User not found" 
    };
  } catch (error) {
    console.error("❌ Error in getting user:", error);
    return { 
      user: null, 
      token: "", 
      status: 400,
      message: "Invalid credentials" 
    };
  }
};

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  register,
  login,
  updateprofile,
} as const;