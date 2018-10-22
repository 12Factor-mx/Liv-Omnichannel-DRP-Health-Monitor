
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
exports.update = (req, res) => {
    Rootmonprd.findByIdAndUpdate(req.params.rootmonprdId, req.body, { new: true })
        .then(Rootmonprd => {
            if (!Rootmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.rootmonprdId
                });
            }
            res.send(Rootmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.rootmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.rootmonprdRootmonprdId
            });
        });
};

