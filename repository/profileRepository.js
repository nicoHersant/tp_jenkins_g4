/* Load Database */
const db = require('../db-config');
var mysql = require('mysql');
/* Load bluebird Promise */
const Promise = require('bluebird');

class ProfileRepository {
    /*
    * getProfilesList() et getDeliveryList() sont les fonctions d'API utilisées pour l'affichage des donnée de la page d'accueil
    */
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
    /*
    * setDelivery() et setDeliveryBoy() sont les fonctions d'enregistrement en base de donnée. Elles sont déclenchées par setData.
    * la connection est donnée par la fonction getCo(), la connection en variable globale pose des problèmes de fermeture de connection lors d'enregistrements successifs, la placer en variable locale évite ce soucis.
    */
    getCo(){
      var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'jenkins_user',
        password : 'VlR1d1oiqrccMxid',
        database : 'api_jenkins'
      });
      return connection
    }
    setDelivery(data){
      // enregistrement nouvelle livraison
      var connection = this.getCo();
      var d = new Date();
      d.setTime(data[3]);
      var sqlRequest = 'INSERT INTO delivery (deliveryboy, package, createdAt) VALUES (?,?,?)';
      var data= [ data[4], data[2], d ];
      connection.connect(function(err) {
        if (err) throw err
        connection.query(sqlRequest, data, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            connection.end();
          });
       });

    }
    setDeliveryBoy(data){
      // enregistrement nouveau livreur
      var connection = this.getCo();
     var sqlRequest = 'INSERT INTO deliveryboy (firstname, lastname) VALUES (?,?)';
     var data= [ data[0], data[1] ];
     connection.connect(function(err) {
         connection.query(sqlRequest, data, function (err, result) {
           if (err) throw err;
           console.log("1 record inserted");
           connection.end();
         });
      });
      this.setData(data)
    }
    /*
    * setData() est appelée par le controller, elle vérifie d'existence préalable du livreur dans la BD
    * si non : enregistrement  du livreur et relance de setData()
    * si oui : récupére l'ID du livreur pour lancer l'enregistrement de la livraison
    */
    setData(data) {
      console.log(data)
      var that = this;
      var connection = this.getCo();
      connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM deliveryboy", function (err, result, fields) {
          if (err) throw err;
          var names = []
          var exist = false
          for(var one in result){
            if(data[0] == result[one].firstname && data[1] == result[one].lastname){
              data.push(result[one].ID)
              console.log(data)
              exist = true
            }
          }
          if(exist){
            that.setDelivery(data)
          }else{
            that.setDeliveryBoy(data)
          }
          connection.end();
        });
      });
    };

}

module.exports = ProfileRepository;
