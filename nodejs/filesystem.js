import fs, { writeFile } from "fs";

//write file operation...
// fs.writeFileSync("vikas.pdf", "hello world");
// fs.writeFileSync("vikas.pdf", "hello vikas kumar");

// fs.appendFileSync("vikas.pdf", " \n how are you?");

//read operation...
// const data = fs.readFileSync("vikas.pdf", "utf-8");
// console.log(data);

// fs.unlinkSync("vikas.pdf");

//async operation...

fs.writeFile("abc.pdf", "hello vikas", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created");
    }
  });
