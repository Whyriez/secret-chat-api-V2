import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoutes from "./routes/UserRoutes.js";
import AuthRoute from "./routes/AuthRoute.js";
import PesanRoute from "./routes/PesanRoute.js";
import Public from "./routes/PublicRoute.js";
import Header from "./routes/HeaderRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

app.use(
  session({
    secret: "2343434dfdsgdsgdfafhjyuoupkhhgngnndaawdwrsvdb",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://secret-chat.my.id/"],
  })
);

app.use(express.json());
app.use(UserRoutes);
app.use(PesanRoute);
app.use(AuthRoute);
app.use(Public);
app.use(Header);

// store.sync();

// const PORT = process.env.APP_PORT || 3000;

app.listen(5000, () => {
  console.log("Server Running");
});

