import mongoose from "mongoose";
mongoose.set("strictQuery", false);

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/PMO");
  } 
  catch (err) {
    console.log(err);
  }
}

export default connectDB;
