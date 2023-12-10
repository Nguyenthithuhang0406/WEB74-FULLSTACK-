require("dotenv").config();

const express = require("express");
const {connectDB} = require("./src/config/db");
//const {userRouters} = require();
const app = express();
const PORT = process.env.PORT || 8000;

//middleware for json
app.use(express.json());

//handle err
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "something broke! ");
});

connectDB().then((res) => {
    console.log(res);
    app.listen(PORT, () => {
        console.log(`server running up in port: ${PORT}`);
    });
}).catch((err) => {
    console.err(err);
})
