
const
    Weblogiclmonprd = require('../model/weblogiclmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Weblogiclmonprd.find()
        .then(weblogiclmonprd => {
            res.send(weblogiclmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogiclmonprd."
            });
        });
};

exports.update = (req, res) => {
    Weblogiclmonprd.findByIdAndUpdate(req.params.weblogiclmonprdId, req.body, { new: true })
        .then(Weblogiclmonprd => {
            if (!Weblogiclmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogiclmonprdId
                });
            }
            res.send(Weblogiclmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogiclmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.weblogiclmonprdId
            })
        })
}


exports.updateParents = (req, res) => {

    getWebLogicLMonPrdStatus().then((response) => {

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
        req.body.estado = (percentage == 100 ? "consistente" : "incosistente");
        req.body.estadoDestalle = weblogicStatusTotals;


        /*----------------------------------------------------------------------*/

        updateeCommerceLMonPrdStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating WeblogicLMonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting weblogic " + e
        });
    })

};

const getWebLogicLMonPrdStatus = () => {
    return axios.get('http://localhost:9001/weblogiclmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogiclmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
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
