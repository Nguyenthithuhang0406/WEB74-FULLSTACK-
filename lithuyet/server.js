const express = require("express");
const app = express();
const { logger } = require("./utils");

const p = {
  firstName: "Tom",
  lastName: "Halland",
  address: "Hn",
};

app.get("/", (req, res) => {
  logger(req);
  res.json("Hello");
});

app.get("/products", (req, res) => {
  logger(req);

  res.json(p);
});

//create post

app.post("/posts", (req, res) => {
  logger(req);
  res.json("create post");
});

//delete post

app.delete("/post", (req, res) => {
  logger(req);
  res.json("delete post");
});

app.listen(5173, () => {
  console.log("server start in port 5173");
});
