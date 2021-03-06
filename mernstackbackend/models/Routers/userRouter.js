//here we are creating the router which will go and talk to the server.js file
import express from "express";
const router = express.Router();
import {
  getUser,
  findUser,
  insertUser,
  updateUser,
  deleteUser,
} from "../models/User.Model.js";

//here the real requests happens for the server side,
//the operations are held in this part, which go and queries with the models

//get user
router.get("/", (req, res) => {
  console.log(req.body);
  res.send("get user running");
});

//post user
router.post("/", async (req, res) => {
  try {
    const result = await insertUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "Success",
          message: "user posted succefully",
        })
      : res.json({
          status: "error",
          message: "user registration unsuccessfull",
        });
  } catch (error) {
    let message = error.message;

    console.log(error.message);
    res.json({
      status: "error",
      message,
    });
  }
});
//find user
router.post("/find", async (req, res) => {
  const user = await findUser(req.body);
  user?._id
    ? res.json({
        staus: "success",
        user,
      })
    : res.json({
        staus: "error",
        message: "could not find",
      });
});
//delete user
router.delete("/", async (req, res) => {
  const user = await deleteUser(req.body);
  res.send("user has been deleted successfully");
});

export default router;
