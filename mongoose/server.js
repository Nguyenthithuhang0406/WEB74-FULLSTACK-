require('dotenv').config();

const express = require("express");
const {connectToDb} = require("./src/config/db");
const { userRoute } = require('./src/routes/user-route');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/user", userRoute);

app.use((err, req, res, next) => {
    
    res.status(err.statusCode || 500).send(err.message || "something broken");
});

connectToDb().then((res) => {
    console.log(res);
    app.listen(PORT, () => {
        console.log(`server running up in PORT: ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
})

