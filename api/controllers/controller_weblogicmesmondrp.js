
const
    Weblogicmulmondrp = require('../model/weblogicmesmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Weblogicmulmondrp.find()
        .then(weblogicmulmondrp => {
            res.send(weblogicmulmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicmesmondrp."
            });
        });
};

exports.update = (req, res) => {
    Weblogicmulmondrp.findByIdAndUpdate(req.params.weblogicmulmondrpId, req.body, { new: true })
        .then(Weblogicmulmondrp => {
            if (!Weblogicmulmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicmulmondrpId
                });
            }
            res.send(Weblogicmulmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicmulmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.weblogicmulmondrpId
            })
        })
}


exports.updateParents = (req, res) => {

    getWeblogicmulmonDrpStatus().then((response) => {

        const weblogicStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(weblogicStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "WebLogic";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = weblogicStatusTotals;


        /*----------------------------------------------------------------------*/

        updateeCommerceLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating WeblogicmesmonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting weblogic " + e
        });
    })

};

const getWeblogicmulmonDrpStatus = () => {
    return axios.get('http://localhost:9001/weblogicmesmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogicmesmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateeCommerceLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/ecommercemesmondrp/WebLogic', body)
        .then((response) => {
            console.log(" put http://localhost:9001/ecommercemesmondrp/WebLogic result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
