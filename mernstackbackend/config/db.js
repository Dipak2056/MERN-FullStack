import mongoose from "mongoose";

export const dbConnection = () => {
  const connectionString = "mongodb://localhost:27017/dummy_app";
  const con = mongoose.connect(connectionString);

  con && console.log("connected to the mongodb successfull");
};
