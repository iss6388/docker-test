// index.js
const express = require('express');
const app = express();
const startDate = new Date();

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.listen(3000, () => console.log('Server is up and running', startDate));
