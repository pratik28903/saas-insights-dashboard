import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
  } catch (err) {
    process.exit(1);
  }
};
