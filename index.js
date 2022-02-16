const express = require('express')
const app = express()
const knex = require('knex');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.static(path.join(__dirname, './frontend/build')));
const dbconfig = require('./knexfile')[process.env.NODE_ENV]
const db = knex(dbconfig)

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend/build/"));
// });


app.get('/api/', async (req, res) => {
  const bugs = await db.select().from('pernheroku');
  res.send(bugs);
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})