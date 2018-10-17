
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

exports.update = (req, res) => {
    Ecommercelmondrp.findByIdAndUpdate(req.params.ecommercelmondrpId, req.body, {new: true })
        .then(Ecommercelmondrp => {
            if (!Ecommercelmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmondrpId
                });
            }
            res.send(Ecommercelmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercelmondrpId
            });
        });
};
