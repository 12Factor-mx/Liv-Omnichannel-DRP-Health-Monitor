
const
    Ecommercelmondrp = require('../model/ecommercelmondrp.js');


exports.findAll = (req, res) => {
    Ecommercelmondrp.find()
        .then(ecommercelmondrp => {
            res.send(ecommercelmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercelmondrp."
            });
        });
};
