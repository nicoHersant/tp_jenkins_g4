const mysql = require('mysql');

const db  = mysql.createPool({
  host     : 'localhost',
  user     : 'imie',
  password : 'passe',
  database : 'just_api'
});

module.exports = db;
