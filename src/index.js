import ConnectDb from "./db/index.js";
import dotenv from "dotenv";
import express from "express";

const app = express();

dotenv.config({
  path: "./.env",
});
// Connect to MongoDB
ConnectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection error", err);
  });
