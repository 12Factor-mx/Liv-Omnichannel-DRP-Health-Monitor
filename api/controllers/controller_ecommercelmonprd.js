
const
    Ecommercelmonprd = require('../model/ecommercelmonprd.js');


exports.findAll = (req, res) => {
    Ecommercelmonprd.find()
        .then(ecommercelmonprd => {
            res.send(ecommercelmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercelmonprd."
            });
        });
};
