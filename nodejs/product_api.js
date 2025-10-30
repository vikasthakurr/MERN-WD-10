//steps
//make a simple server using express
// create a get route to fetch all products
//create a home route that returns a welcome message
//use fs module to read the data from a json file and send it as a response

import express from "express";

import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to the product api");
});
const products = JSON.parse(data);
    //   res.json(products);
app.get("/products", (req, res) => {
  fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("error reading file");
    } else {
      //   const products = JSON.parse(data);
      //   res.json(products);
      res.type("application/json").send(data);
    }
  });
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
