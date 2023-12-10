const {MongoClient} = require('mongodb');

//connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


//database name
const dbName = 'myProject';

async function connectToDB(){
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('documents');

    return 'done.';
}

connectToDB();