const express = require("express");
const app = express();

const mongodb = require("mongodb");
const mongoclient = mongodb.MongoClient;
const URL = "mongodb://localhost:27017";

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

// app.post("/user", (req, res) => {
//   req.body.id = users.length + 1;
//   users.push({
//     id: req.body.id,
//     name: req.body.name,
//     age: req.body.age,
//   });
//   res.json("message success");
// });

app.put("/user/:id", (req, res) => {
  console.log(req.params);
  // console.log(req.query)
  console.log(req.body);
  res.json({ message: "Edited Successfully" });
});

app.delete("/user/:id", (req, res) => {
  const index = users.findIndex((o) => o.id == req.params.id);
  users.splice(index, 1);
  res.json({ message: "Deleted successfully" });
});

app.get("/user/:id", (req, res) => {
  const index = users.findIndex((o) => o.id == req.params.id);
  res.json(users[index]);
});

app.post("/user", async (req, res) => {
  try {
    //Connect MongoDB
    const connection = await mongoclient.connect(URL);
    // Select Database
    const db = connection.db("B40WD2");
    // Select Collection
    const collection = db.collection("Users");
    //Do any operation
    const operation = await collection.insertOne(req.body);
    //Close MongoDB connection
    await connection.close();
    res.json({"message":"Inserted Successfully"}) 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong.Contact Administrator" });
  }
});


app.listen(8000);
