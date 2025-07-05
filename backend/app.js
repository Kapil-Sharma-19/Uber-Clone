require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports = app;