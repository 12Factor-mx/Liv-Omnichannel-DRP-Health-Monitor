
const
    Weblogicsubmondrp = require('../model/weblogicsubmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Weblogicsubmondrp.find()
        .then(weblogicsubmondrp => {
            res.send(weblogicsubmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicsubmondrp."
            });
        });
};

exports.update = (req, res) => {
    Weblogicsubmondrp.findByIdAndUpdate(req.params.weblogicsubmondrpId, req.body, { new: true })
        .then(Weblogicsubmondrp => {
            if (!Weblogicsubmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicsubmondrpId
                });
            }
            res.send(Weblogicsubmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.weblogicsubmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.weblogicsubmondrpId
            })
        })
}


exports.updateParents = (req, res) => {

    getWeblogicsubmonDrpStatus().then((response) => {

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

        updateeCommerceLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating WeblogicsubmonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting weblogic suburbia" + e
        });
    })

};

const getWeblogicsubmonDrpStatus = () => {
    return axios.get('http://localhost:9001/weblogicsubmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogicsubmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateeCommerceLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/ecommercesubmondrp/WebLogicSuburbia', body)
        .then((response) => {
            console.log(" put http://localhost:9001/ecommercesubmondrp/WebLogicSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
