import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { name } from "ejs";
import jwt from "jsonwebtoken";

const PORT = 3000;

dotenv.config();
const app = express();
app.use(express.json());

//mongodb connection setup...

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is must"],
    minlength: [3, "Name must be greater than 3 character"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [5, "password must not be less than 5 digit"],
  },
});

const User = mongoose.model("User", userSchema);
//post route for generating the jwt token

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ message: "invalid credentials" });

    //password matching...
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "invalid password" });

    //else assign jwt token....
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );
    res.status(200).json({
      message: "login successful please check token",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//middleware to check the jwt working.....

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "access denied no token availble" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "invalid token" });
  }
};

app.get("/userlist", verifyToken, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
