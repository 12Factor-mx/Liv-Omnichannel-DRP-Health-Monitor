
const
    Weblogicserverslmonprd = require('../model/weblogicserverslmonprd.js');


exports.findAll = (req, res) => {
    Weblogicserverslmonprd.find()
        .then(weblogicserverslmonprd => {
            res.send(weblogicserverslmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicserverslmonprd."
            });
        });
};
