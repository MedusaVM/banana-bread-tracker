import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//* Middleware *//
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN, //Only the origin defined in the env file is allowed
  })
);
app.use(express.json());
console.log(process.env);

app.get("/", (_req, res) => {
  res.send("Banana Bread Tracker backend is running!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
