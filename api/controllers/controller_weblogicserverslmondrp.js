
const
    Weblogicserverslmondrp = require('../model/weblogicserverslmondrp.js');


exports.findAll = (req, res) => {
    Weblogicserverslmondrp.find()
        .then(weblogicserverslmondrp => {
            res.send(weblogicserverslmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicserverslmondrp."
            });
        });
};
