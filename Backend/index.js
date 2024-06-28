import dotenv from "dotenv";
import { ConnectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const prot = process.env.PROT || 3000;
ConnectDB()
  .then(() => {
    app.listen(prot, () => {
      console.log(`Connecting to server ${prot}`);
      app.on("error", (err) => {
        console.log(`ERROR: ${err}`);
      });
    });
  })
  .catch((err) => {
    console.log(`MONGO DB Connection Error : ${err}`);
  });
