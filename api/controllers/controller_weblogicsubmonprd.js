
const
    Weblogicsubmonprd = require('../model/weblogicsubmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Weblogicsubmonprd.find()
        .then(weblogicsubmonprd => {
            res.send(weblogicsubmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicsubmonprd."
            });
        });
};

exports.update = (req, res) => {
    Weblogicsubmonprd.findByIdAndUpdate(req.params.weblogicsubmonprdId, req.body, { new: true })
        .then(Weblogicsubmonprd => {
            if (!Weblogicsubmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicsubmonprdId
                });
            }
            res.send(Weblogicsubmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicsubmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.weblogicsubmonprdId
            })
        })
}


exports.updateParents = (req, res) => {

    getWeblogicsubmonPrdStatus().then((response) => {

        const weblogicStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(weblogicStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "WebLogic Suburbia";
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
                message: "Error updating WeblogicSubMonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting weblogic suburbia " + e
        });
    })

};

const getWeblogicsubmonPrdStatus = () => {
    return axios.get('http://localhost:9001/weblogicsubmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogicsubmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateeCommerceLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/ecommercesubmonprd/WebLogicSuburbia', body)
        .then((response) => {
            console.log(" put http://localhost:9001/ecommercesubmonprd/WebLogicSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
