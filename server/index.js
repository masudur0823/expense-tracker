const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// use middleware
app.use(cors());
app.use(express.json());

// db info
// Username: dbUser1
// Password: zjY7v4ZQTztv0gdx


const uri = "mongodb+srv://dbUser1:zjY7v4ZQTztv0gdx@cluster0.e1dzoqd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("connected")
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) => {
  res.send("Hello World2!");
});

const users = [
  {
    id: "1",
    name: "masud",
  },
  {
    id: "2",
    name: "marjan",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
