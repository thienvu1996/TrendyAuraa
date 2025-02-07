import express from "express";
import {
  loginUser,
  loginAdmin,
  registerUser,
} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/login/admin", loginAdmin);
export default userRouter;
