require("dotenv").config();

const express = require("express");
const {connectDB} = require("./src/config/db");
const {userRoutes} = require("./src/routes/user-route");
const {authRoutes} = require("./src/routes/auth-route");

const app = express();
const PORT = process.env.PORT || 8000;


//middleware for static

app.use(express.static("public"));

//middleware for json
app.use(express.json());

//route
app.use("/api/auth", authRoutes);
app.use("/user", userRoutes);

//handle err
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "something broke!");
});

connectDB().then((res) => {
    console.log(res);
    app.listen(PORT, () => {
        console.log(`server running up in port: ${PORT}`);
    });
}).catch((err) => {
    console.err(err);
});