import mongoose from 'mongoose';
import cfg from '../config/config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(cfg.mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
}

export default connectDB;
