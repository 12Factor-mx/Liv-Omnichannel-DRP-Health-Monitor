
const
    Originlmondrp = require('../model/originlmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Originlmondrp.find()
        .then(originlmondrp => {
            res.send(originlmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando originlmondrp."
            });
        });
};

exports.update = (req, res) => {
    Originlmondrp.findByIdAndUpdate(req.params.originlmondrpId, req.body, { new: true })
        .then(Originlmondrp => {
            if (!Originlmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmondrpId
                });
            }
            res.send(Originlmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.originlmondrpId
            })
        })
}


exports.updateParents = (req, res) => {

    getWebLogicLMonDrpStatus().then((response) => {

        const originStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(originStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "WebLogic";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = originStatusTotals;


        /*----------------------------------------------------------------------*/

        updateeCommerceLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating OriginLMonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting origin " + e
        });
    })

};

const getWebLogicLMonDrpStatus = () => {
    return axios.get('http://localhost:9001/originlmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/originlmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateeCommerceLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/ecommercelmondrp/WebLogic', body)
        .then((response) => {
            console.log(" put http://localhost:9001/ecommercelmondrp/WebLogic result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
