require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectToDb = require('./db/db');
const app = express();
connectToDb();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports = app;