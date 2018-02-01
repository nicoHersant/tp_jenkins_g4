const mysql = require('mysql');

const db  = mysql.createPool({
  host     : 'localhost',
  user     : 'jenkins_user',
  password : 'VlR1d1oiqrccMxid',
  database : 'api_jenkins'
});

module.exports = db;
