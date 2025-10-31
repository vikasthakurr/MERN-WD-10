import express from "express";
import mongoose from "mongoose";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//mongoose connection setup

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:Vikas123@e-com.vo8lwca.mongodb.net/"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
