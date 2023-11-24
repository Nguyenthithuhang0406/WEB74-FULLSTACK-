const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    // logger(req);
    res.json("GET PRODUCT");
});

app.post("/posts", (req, res) => {
    
})