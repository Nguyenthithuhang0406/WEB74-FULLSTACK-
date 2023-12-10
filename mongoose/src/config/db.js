const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

async function connectToDb (){
    await mongoose.connect(MONGO_URL);
    return " connect ok";
}

module.exports = {connectToDb};