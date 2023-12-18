const mongoose = require("mongoose");
const {MongoClient} = require("mongodb");
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);

async function connectDB(){
    try{
        //await client.connect(MONGO_URL);
    await mongoose.connect(MONGO_URL);

    return "connect DB ok";
    } catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = {connectDB};