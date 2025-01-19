import ConnectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
// Connect to MongoDB
ConnectDb();
