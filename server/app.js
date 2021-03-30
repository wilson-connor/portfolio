require('dotenv').config();

const path = require('path');

const express = require('express');

const app = express();

const mailer = require('./mailer');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, '../dist/index.html');
  console.log(filePath);
  res.sendFile(filePath);
});

app.post('/email', (req, res) => {
  (async () => {
    const { body } = req;
    try {
      await mailer(body);
      res.status(201).end();
      console.log(body);
    } catch (err) {
      res.status(500).end();
    }
  })();
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
