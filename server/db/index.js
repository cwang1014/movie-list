var mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movielist',
});

connection.connect();

module.exports = connection;