//http modules....
//server using http-->http module-->createserver and listen (req,res)
import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  //req and response handling....using http
  res.end("hello from server");
});

server.listen(PORT, () => {
  console.log("your server is running of localhost in port 3000");
});
