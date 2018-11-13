const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Connecting to the database 

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now... ' + err);
    process.exit();
}); 

 app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "API for DRP ATG V0.0.1 --- Infra Backoffice Liverpool --- mdiazm01@liverpool.com.mx" });
});

// Require Notes routes
require('./routes/routes.js')(app);
require('./routes/endeca_routes.js')(app);
require('./routes/origin_routes.js')(app);


// listen for requests
app.listen(9001,'0.0.0.0', () => {
    console.log("Server is listening on port 9001");
});