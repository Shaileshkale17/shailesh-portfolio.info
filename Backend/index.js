import dotenv from "dotenv";
import { ConnectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    app.on("error", (err) => {
      console.error(`ERROR: ${err}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDB Connection Error: ${err}`);
  });
