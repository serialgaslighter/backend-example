import express from 'express';
import 'dotenv/config'

const PORT = process.env.SECRET_EXPAMPLE_PORT;
const KEY = process.env.SECRET_EXPAMPLE_KEY;
const app = express();

app.get("/", (req, res) => {
  res.send(`Hallo vom Backend-Server, KEY: ${KEY}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
