const { MongoClient } = require('mongodb');

const express = require("express");
const studentRouter = express.Router();
const app = express();

const db = {};

async function connectToDb() {
  const client = new MongoClient("mongodb://localhost: 27017");
  await client.connect();
  console.log("db connected");
  const database = client.db("mindx_rn_20");
  db.teachers = database.collection("teachers");
  db.students = database.collection("students");
  db.classes = database.collection("classes");
}

studentRouter.post('/', async(req, res) => {
    const {name, age, address, hobbies} = req.body;
    await db.students.insertOne({
        name: name,
        age: age,
        address: address,
        hobbies: hobbies
    })
    res.send("inserted");
})
// db.listen(5001, () => {
//   //console.log("hihi");
//   connectToDb();
// });

export default { connectToDb, db };
