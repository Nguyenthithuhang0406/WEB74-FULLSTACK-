const express = require("express");
const app = express();
//const PORT = process.env.PORT || 8000;
const PORT = 8000;
const { connectToDb } = require("./config/db");

require("dotenv").config();

app.use(express.json());
app.post("/user/create", (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400).json("username and password are require");
        return;
    }
    db.user.insertOne(newUser);
    res.sendStatus(201);
});


//event loop
app.get("/users", async (req, res) => {
    const result = await db.users.find().toAray();

     res.json(result);
});

app.delete("/users", async(req,res) => {
    await db.users.deleteMany();
    res.json("OK");
});

app.put("/user/:id",async(req, res) =>{
    const id = req.params.id;
    await db.users.deleteOne({_id: id});
    res.json("OK");
} )

app.put("/user/:id", async(req, res) => {
    const id = req.params.id;
    const {username} = req.body;
    const update = {
        $set: {
            username,
        },
    };
    await db.users.updateOne({_id:newObjectId(id)}, update);
    res.json("ok");
})

app.use((err, req, res, next) => {
  res.status(500).send(err.message || "something broke");
});

connectToDb()
  .then((res) => {
    console.log(res);
    app.listen(PORT, () => {
      console.log(`server running up in port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
