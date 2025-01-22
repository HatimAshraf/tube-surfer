import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import { LIMIT } from "./constants.js";

const app = express();

app.use(
  express.json({
    limit: LIMIT,
  })
);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Replace with your frontend URL
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: LIMIT,
  })
);

app.use(express.static("public"));
app.use(cookieParser());

app.use(cookieParser());
