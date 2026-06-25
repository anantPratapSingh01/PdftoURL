import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(" Connecting to:", process.env.MONGODB_URI);  
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(` Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;