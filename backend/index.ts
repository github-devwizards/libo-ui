import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server started at http://localhost:${process.env.PORT}`);
});
