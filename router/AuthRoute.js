import express from "express";
import { login, logout, me } from "../controller/authController.js";

const AuthRouter = express.Router();

AuthRouter.get("/api/users/me", me); //check status account
AuthRouter.post("/api/users/login", login); //login route
AuthRouter.delete("/api/users/logout", logout); //Logout route

export default AuthRouter;
