import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;
const app = express();

//middleware to process the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//mongoose connection setup

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("mongodb connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
