const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

async function connectDB(){
    await mongoose.connect(MONGO_URL);
    return "connect DB ok";
}
module.exports = {connectDB};