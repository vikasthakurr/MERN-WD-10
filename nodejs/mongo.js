import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const PORT = 3000;

dotenv.config();

const app = express();
app.use(express.json());

//mongo connection...
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

//schema

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const User = mongoose.model("User", userSchema);

//create route
app.post("/signup", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email: email, password: hashedPassword });

    const savedUser = await user.save();
    res.status(201).json({ message: "user created successfully" });
    console.log(req.body);
  } catch (err) {
    console.log("error", err);
  }
});

//login route -- homework
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "user not found" });

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      return res.status(400).json({ message: "invalid credentials" });
    //jwt token assign
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // console.log(token);
    res.json({ message: "login success", token });
  } catch (err) {
    res.status(400).json({ message: "something went wrong" });
  }
});

//middleware for bearer

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "access denied, no token availble" });
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
app.get("/allusers", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: "something went wrong", err });
  }
});

//read user by id

app.get("/allusers/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "user not found" });

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "something went wrong" });
  }
});

//update operation...

app.put("/allusers/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "something went wrong" });
    res.json(updatedUser);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

//delete

app.delete("/allusers/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: ",....." });
    res.json(deletedUser);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});
app.listen(PORT, () => {
  console.log("server started");
});
