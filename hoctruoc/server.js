const { connectToDb } = require("./db").default;

const express = require("express");

const app = express();


app.listen(5001, () => {
  //console.log("hihi");
  connectToDb();
});
