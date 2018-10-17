
const
    Weblogiclmondrp = require('../model/weblogiclmondrp.js');


exports.findAll = (req, res) => {
    Weblogiclmondrp.find()
        .then(weblogiclmondrp => {
            res.send(weblogiclmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogiclmondrp."
            });
        });
};

exports.update = (req, res) => {
    Weblogiclmondrp.findByIdAndUpdate(req.params.weblogiclmondrpId, req.body, { new: true })
        .then(Weblogiclmondrp => {
            if (!Weblogiclmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogiclmondrpId
                });
            }
            res.send(Weblogiclmondrp);})
                .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogiclmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.weblogiclmondrpId
            });
        });
};
