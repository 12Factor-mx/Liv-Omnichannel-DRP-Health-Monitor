
const
    Weblogiclmonprd = require('../model/weblogiclmonprd.js');

const axios = require('axios'); 


exports.findAll = (req, res) => {
    Weblogiclmonprd.find()
        .then(weblogiclmonprd => {
            res.send(weblogiclmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogiclmonprd."
            });
        });
};
