const express = require("express");
const app = express();
const PORT = 9999;
const { MongoClient } = require('mongodb');
require("dotenv").config();

app.use(express.json);

// Connection URL
const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = 'admin';

const connectToDB = async() => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return 'done.';
}


connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running up in port: ${PORT}`);
  });
}).catch ((err) => {
  console.log("err", err);
});
