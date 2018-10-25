
const
    Weblogicmulmonprd = require('../model/weblogicmulmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Weblogicmulmonprd.find()
        .then(weblogicmulmonprd => {
            res.send(weblogicmulmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicmulmonprd."
            });
        });
};

exports.update = (req, res) => {
    Weblogicmulmonprd.findByIdAndUpdate(req.params.weblogicmulmonprdId, req.body, { new: true })
        .then(Weblogicmulmonprd => {
            if (!Weblogicmulmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicmulmonprdId
                });
            }
            res.send(Weblogicmulmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicmulmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.weblogicmulmonprdId
            })
        })
}


exports.updateParents = (req, res) => {

    getWeblogicmulmonPrdStatus().then((response) => {

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

        updateeCommerceLMonPrdStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating WeblogicmulmonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting weblogic " + e
        });
    })

};

const getWeblogicmulmonPrdStatus = () => {
    return axios.get('http://localhost:9001/weblogicmulmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogicmulmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateeCommerceLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/ecommercelmonprd/WebLogic', body)
        .then((response) => {
            console.log(" put http://localhost:9001/ecommercelmonprd/WebLogic result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
