
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

exports.update = (req, res) => {
    Ecommercelmonprd.findByIdAndUpdate(req.params.ecommercelmonprdId, req.body, { new: true })
        .then(Ecommercelmonprd => {
            if (!Ecommercelmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmonprdId
                });
            }
            res.send(Ecommercelmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercelmonprdId
            });
        });
};
