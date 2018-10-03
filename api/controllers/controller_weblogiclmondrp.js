
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
