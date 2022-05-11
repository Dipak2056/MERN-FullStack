//here we create the schema to be set in the database
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [6, "name should be at least 6 char long"],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [3, "this cant be lastname"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1, //this is to arrange the email addresses in asscending orders
    },
    address: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
//now we have to export this schema to models
export default mongoose.model("User", userSchema);
