
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
