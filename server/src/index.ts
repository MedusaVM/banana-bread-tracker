import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); //All functions that may use .env variables should be imported after this method is called

// Helpers
import { connectToDb } from "./db";

const app = express();
const PORT = process.env.PORT ?? 5000;

//* Middleware *//
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN, //Only the origin defined in the env file is allowed
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Banana Bread Tracker backend is running!");
});

const startServer = async () => {
  try {
    await connectToDb();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Failed to initialize the server:", err);
  }
};

startServer();
