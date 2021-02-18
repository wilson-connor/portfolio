require('dotenv').config();

const path = require('path');

const express = require('express');

const app = express();

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
})

app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, '../dist/index.html');
  console.log(filePath);
  res.sendFile(filePath);
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}` );
});

