const express = require('express');
const db = require('./db');
const controller = require('./controllers');
const app = express();
const PORT = 3000 || process.env.PORT;

// app.use(express.static('client/dist'));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/movies', (req, res) => {
  controller.get(req, res);
  console.log('!!!!!!GETTING!!!!!!');
  // console.log('res', res);
});

app.all('/api/movies', (req, res) => {
  console.log('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})