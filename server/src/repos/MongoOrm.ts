import mongoose from 'mongoose';
import { logger } from '../utils/logger';

/******************************************************************************
                                Functions
******************************************************************************/

async function connectDb(): Promise<typeof mongoose> {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not found in environment variables');
    }

    const db = await mongoose.connect(process.env.MONGO_URI);
    logger.info("🗄️ Successfully connected to MongoDB");
    return db;
  } catch (error) {
    logger.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  connectDb,
} as const;