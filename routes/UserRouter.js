import { verifyUser } from "../middleware/AuthUser.js";
import {
  createUsers,
  deleteUser,
  getUsers,
  getUsersById,
  updateUsers,
} from "../controller/userController.js";
import express from "express";

const UserRouter = express.Router();

UserRouter.get("/api/users", verifyUser, getUsers); //get All Users Data
UserRouter.get("/api/users/:id", verifyUser, getUsersById); //get users by id
UserRouter.post("/api/users/register", verifyUser, createUsers); //Register User
UserRouter.put("/api/users/:id", verifyUser, updateUsers); //update existing user
UserRouter.delete("/api/users/:id", verifyUser, deleteUser); //delete existing user

export default UserRouter;
