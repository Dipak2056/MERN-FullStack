import UserSchema from "../schemas/User.Schema.js";
//here we create the functions that performs the real deals in the database

//insert user
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};
//get the user
export const getUser = (_id) => {
  return UserSchema.findById(_id);
};

//to find the specific user according to the id
//@filter should be passed as an object
export const findUser = (filter) => {
  return UserSchema.findOne(filter);
};
//to delete the user based on _id
export const deleteUser = (filter) => {
  return UserSchema.findOneAndDelete(filter);
};
//to update the user
export const updateUser = (_id, obj) => {
  return UserSchema.findByIdAndUpdate(_id, obj);
  //obj must be object
};
