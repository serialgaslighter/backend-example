import express from 'express';
import 'dotenv/config'
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json())
const PORT = process.env.SECRET_EXPAMPLE_PORT;
const KEY = process.env.SECRET_EXPAMPLE_KEY;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DATABASE_NAME;

const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME)

app.get("/", async (req, res) => {
  try {
    const docs = await db.collection("exampleCollection").find().toArray();
    res.send(docs);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
})

app.post("/createDoc", async (req, res) => {
  const content = req.body;
  try {
    const result = await db.collection("exampleCollection").insertOne(content);
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
