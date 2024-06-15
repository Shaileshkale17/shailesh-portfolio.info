import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const ConnectDB = async () => {
  try {
    const connectIntance = await mongoose.connect(
      `${process.env.MONGODB_API}/${process.env.DB_NAME}`
    );
    console.log(`\n MongoDB Connected  !! ${connectIntance.connection.host}`);
  } catch (error) {
    console.log(`MONGODB Connection ERROR ${error.message}`);
    process.exit(1);
  }
};
