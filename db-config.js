const mysql = require('mysql');

const db  = mysql.createPool({
  host     : '10.1.4.28',
  port      : '3306',
  user     : 'jenkins_user',
  password : 'VlR1d1oiqrccMxid',
  database : 'api_jenkins'
});

module.exports = db;
