
const { MongoClient } = require("mongodb");

const db = {};

async function connectToDb() {
  //const client = new MongoClient(process.env.MONGO_URL);
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  
  // const database = client.db(process.env.MONGO_DB_KEY);
  const database = client.db("Web74");
  db.users = database.collection("users");
  return "connect db successfully!!";
}


module.exports = {connectToDb, db};