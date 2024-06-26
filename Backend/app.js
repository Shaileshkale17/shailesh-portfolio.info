import express from "express";
import cors from "cors";
import UserRouter from "./router/User.routes.js";
import bodyParser from "body-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ welcom: "Welcome to server" });
});

app.use("/api/v1/users", UserRouter);
export { app };
