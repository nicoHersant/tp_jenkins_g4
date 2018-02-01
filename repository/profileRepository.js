/* Load Database */
const db = require('../db-config');

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
}

module.exports = ProfileRepository;
