import {
  createUsers,
  deleteUser,
  getUsers,
  getUsersById,
  updateUsers,
} from "../controller/userController.js";
import express from "express";

const UserRouter = express.Router();

UserRouter.get("/api/users", getUsers); //get All Users Data
UserRouter.get("/api/users/:id", getUsersById); //get users by id
UserRouter.post("/api/users/register", createUsers); //REGISTER Users
UserRouter.put("/api/users/:id", updateUsers); //update existing user
UserRouter.delete("/api/users/:id", deleteUser); //delete existing user

export default UserRouter;
