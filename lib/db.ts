import mongoose from "mongoose";

export default async function connectToDatabase() {
  let uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Mongo database connection string is not provided");
  }
  try {
    await mongoose.connect(uri);
    
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}
