//here we create the schema to be set in the database
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: 1,
  },
  address: {
    type: String,
    required: true,
  },
});
//now we have to export this schema to models
export default mongoose.model("User", userSchema);
