import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

// console.log(process.env.MONGODB_URL);

const PORT = 3000;
const app = express();

//middleware to process the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//mongoose connection setup

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

//create user schema
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

//create user model
const User = mongoose.model("User", userSchema);

//create user
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    //hashed password using bcrypt...
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).json({ message: "user already exist" });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get users details...
app.get("/userlist", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get user by id

app.get("/userlist/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//update user by id
app.put("/userlist/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "user not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//delete user
app.delete("/userlist/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "user not found" });
    res.status(500).json({ message: "user deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
