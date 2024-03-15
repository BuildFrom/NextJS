import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }

  // Connect to MongoDB
  try {
    const uri = process.env.MONGO_URI || "";
    await mongoose.connect(uri);
    // await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

export default connectDB;
