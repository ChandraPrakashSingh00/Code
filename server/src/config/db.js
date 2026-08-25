const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 10,
    });

    isConnected = conn.connection.readyState === 1;

    console.log("MongoDB connected successfully");
  } catch (error) {
    isConnected = false;

    console.error("MongoDB connection error:", error.message);

    throw error;
  }
};

module.exports = connectDB;