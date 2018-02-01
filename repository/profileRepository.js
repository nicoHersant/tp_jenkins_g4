/* Load Database */
const db = require('../db-config');
var mysql = require('mysql');
var con      = mysql.createConnection({
    host     : 'localhost',
    user     : 'jenkins_user',
    password : 'VlR1d1oiqrccMxid',
    database : 'api_jenkins'
});

/* Load bluebird Promise */
const Promise = require('bluebird');

class ProfileRepository {
    getProfilesList() {
        let sqlRequest = 'SELECT `ID`,`firstname`,`lastname` from deliveryboy ORDER BY `lastname`';
        return new Promise(function (resolve, reject) {
            db.getConnection(function (err, connection) {
                if (err) {
                    console.log(err);
                    reject({status: '500', message: 'Internal server error'});
                } else {
                    connection.query(sqlRequest, function (error, results) {
                        // And done with the connection.
                        if (results[0]) {
                            resolve(results);
                            connection.release();
                        } else {
                            reject({status: '404', message: 'Not found'});
                        }
                        // Handle error after the release.
                        if (error) {
                            reject({status: '404', message: 'Not found'});
                        }
                    });
                }
            });
        });
    };

    getDeliveryList() {
        let sqlRequest = 'SELECT `deliveryboy`,`package`,`createdAt` from delivery ORDER BY `createdAt`';
        return new Promise(function (resolve, reject) {
            db.getConnection(function (err, connection) {
                if (err) {
                    console.log(err);
                    reject({status: '500', message: 'Internal server error'});
                } else {
                    connection.query(sqlRequest, function (error, results) {
                        // And done with the connection.
                        if (results[0]) {
                            resolve(results);
                            connection.release();
                        } else {
                            reject({status: '404', message: 'Not found'});
                        }
                        // Handle error after the release.
                        if (error) {
                            reject({status: '404', message: 'Not found'});
                        }
                    });
                }
            });
        });
    };

    setDelivery(data){
      // enregistrement nouvelle livraison
      var d = new Date();
      d.setTime(data[3]);
      var sqlRequest = 'INSERT INTO delivery (`deliveryboy`, `package`, `createdAt`) VALUES ('+mysql.escape(data[4])+','+mysql.escape(data[2])+','+mysql.escape(d)+');';
      con.connect(function(err) {
          con.query(sqlRequest, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
       });

    }
    setDeliveryBoy(data){
      // enregistrement nouveau livreur
     var sqlRequest = 'INSERT INTO deliveryboy (`firstname`, `lastname`) VALUES ('+mysql.escape(data[0])+','+mysql.escape(data[1])+');';
     con.connect(function(err) {
         con.query(sqlRequest, function (err, result) {
           if (err) throw err;
           console.log("1 record inserted");
         });
      });

    }

    setData(data) {
      var that = this;
//
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM deliveryboy", function (err, result, fields) {
          if (err) throw err;
          var names = []
          var exist = false
          for(var one in result){
            if(data[0] == result[one].firstname && data[1] == result[one].lastname){
              data.push(result[one].ID)
              exist = true
            }
          }

          if(exist){
            that.setDelivery(data)
          }else{
            that.setDeliveryBoy(data)
            that.setData(data)
          }
        });
        con.end();
      });

    };
}

module.exports = ProfileRepository;
