// //http modules....
// //server using http-->http module-->createserver and listen (req,res)
// import http from "http";

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   //req and response handling....using http
//   //req analyze..
//   // console.log(req);
//   // console.log(req.body);
//   // console.log(req.url);
//   // console.log(req.method);
//   // console.log(res);
//   // console.log(res.body);
//   // console.log(res);
//   // res.setHeader("Content-Type", "vikas");
//   // res.statusCode = 201;
//   // res.end("hello from server");
//   //creation of end point or routes using req.url
//   if (req.url == "/") {
//     res.end("hello from server");
//   } else if (req.url == "/home") {
//     res.end("hello from home page");
//   } else if (req.url == "/contact") {
//     res.end("hello from contact page");
//   } else {
//     res.statusCode = 404;
//     res.end("page not found");
//   }
// });

// server.listen(PORT, () => {
//   console.log("your server is running of localhost in port 3000");
// });

//server using express......

// import express from "expresFast, unopinionated, minimalist web framework fors";

// const PORT = 3000;

// const server = express();

// //routes definition...

// server.get("/", (req, res) => {
//   res.end("hii from server");
// });

// server.get("/home", (req, res) => {
//   res.end("hii home");
// });

// server.get("/about", (req, res) => {
//   res.end("hi about");
// });

// server.listen(PORT, () => {
//   console.log("server started at port 3000");
// });

import express from "express";
import fs from "fs";
const PORT = 3000;

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.end("hii from server");
});

app.get("/file", (req, res) => {
  //i will read file using fs module async operation....
  fs.readFile("./file.html", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("error in reading file");
      return;
    }
    res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("file not found");
      return;
    }
    res.setHeader("content-type", "text/html");
    res.status(200).send(data);
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "server side rendering" });
});

app.post("/login", (req, res) => {
  // const { username, password } = req.body;
  const username = req.body.username;
  const password = req.body.password;
  console.log({ username, password });
});
app.listen(PORT, () => {
  console.log("server is running on 3000");
});

//CRUD operation
//get
//post
//put
//patch
//update
//delete

//read operation
