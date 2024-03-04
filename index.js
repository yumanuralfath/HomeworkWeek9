import express from "express";
import Movierouter from "./router/MovieRoute.js";
import UserRouter from "./router/UserRouter.js";
import db from "./config/database.js";
import "dotenv";

const port = process.env.PORT || 2070;
const app = express();
app.use(express.json());
app.use(Movierouter);
app.use(UserRouter);

try {
  await db.authenticate();
  console.log("connection established successfully");
} catch (error) {
  console.error("unable to connect to database");
}

app.listen(port, () => {
  console.log("serve running on http://localhost:" + port);
});
