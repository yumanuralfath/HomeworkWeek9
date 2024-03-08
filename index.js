import express from "express";
import db from "./config/database.js";
import dotenv from "dotenv";
import session from "express-session";
import sequelizeStore from "connect-session-sequelize";
import Movierouter from "./routes/MovieRoute.js";
import UserRouter from "./routes/UserRouter.js";
import AuthRouter from "./routes/AuthRoute.js";
import swaggerDoc from "./swagger.js";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
dotenv.config();

const port = process.env.PORT || 2070;
const app = express();

//session store
const sessionStore = sequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
  checkExpirationInterval: 1 * 60 * 1000,
  expiration: 1 * 60 * 60 * 1000,
});

//Make Documentation With Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//Database Check
// try {
//   await db.authenticate();
//   console.log("connection established successfully");
// } catch (error) {
//   console.error("unable to connect to database");
// }

//middleware
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(morgan("common"));
app.use(express.json());
app.use(AuthRouter);
app.use(Movierouter);
app.use(UserRouter);

// store.sync(); //sync with store session

app.listen(port, () => {
  console.log("server running on http://localhost:" + port);
});
