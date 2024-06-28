import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const ConnectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_API}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`\nMongoDB Connected!! ${connectInstance.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection ERROR: ${error.message}`);
    process.exit(1);
  }
};
