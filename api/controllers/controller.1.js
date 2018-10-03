
const
    Rootmonprd = require('../model/model.1.js');


exports.findAll = (req, res) => {
    Rootmonprd.find()
        .then(rootmonprd => {
            res.send(rootmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando rootmonprod."
            });
        });
};
