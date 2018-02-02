/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/* Init server listening */
const port = process.argv[2] || 3000;
const path = process.argv[3] || '/api/v1';

/* Body-parser init */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Authorize external access */
/*
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://10.1.4.28:3000/");
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
*/
/* Router configuration */
//app.use(allowCrossDomain);
app.use(require('./routes/routing'));

/* Rendering configuration */
app.set('views', './view');
app.use('/public', express.static(__dirname + '/view/public'));
app.set('view engine', 'pug');

app.listen(port, function () {
    console.log("Server listening on port : " + port + ' with path ' +path);
});

module.exports = path;
