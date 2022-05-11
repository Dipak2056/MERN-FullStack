//importing of all other middle wares
import express from "express";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

const app = express();
//instantiation of express
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
//to connect the server to the database
import { dbConnection } from "./config/db.js";
dbConnection();

//for the page not found request, or for all request
//for the request on the server we have created sepeate files and folders to manage the req and response for that
//we have use the use method of express
import userRouter from "./models/Routers/userRouter.js";
app.use("/api/v1/users", userRouter);

//if no calls are made
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 the page not found</h1>");
  console.log(req.body);
});

//listening to port
app.listen(PORT, console.log(`your server is running at port ${PORT}`));
