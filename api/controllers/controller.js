
const
    Rootmondrp = require('../model/model.js');


exports.findAll = (req, res) => {
    Rootmondrp.find()
        .then(rootmondrp => {
            res.send(rootmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando rootmondrp."
            });
        });
};

exports.update = (req, res) => {
    Rootmondrp.findByIdAndUpdate(req.params.rootmondrpId, req.body, {new: true })
        .then(Rootmondrp => {
            if (!Rootmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.rootmondrpId
                });
            }
            res.send(Rootmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.rootmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.rootmondrpId
            });
        });
};
