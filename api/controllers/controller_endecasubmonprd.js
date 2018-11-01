
const
    Endecasubmonprd = require('../model/endecasubmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Endecasubmonprd.find()
        .then(endecasubmonprd => {
            res.send(endecasubmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecasubmonprd."
            });
        });
};

exports.update = (req, res) => {
    Endecasubmonprd.findByIdAndUpdate(req.params.endecasubmonprdId, req.body, {new: true })
        .then(Endecasubmonprd => {
            if (!Endecasubmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecasubmonprdId
                });
            }
            res.send(Endecasubmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecasubmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.endecasubmonprdId
            });
        });
};

exports.updateParents = (req, res) => {

    getEndecasubmonPrdStatus().then((response) => {

        const endecaStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(endecaStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "XXXXXXXXXXXXXXXXX endeca ";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = endecaStatusTotals;


        /*----------------------------------------------------------------------*/

        updateEndecasubmonPrdStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EndecaSubPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting endeca " + e
        });
    })

};

const getEndecasubmonPrdStatus = () => {
    return axios.get('http://localhost:9001/endecasubmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/endecasubmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateEndecasubmonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/endecasubmonprd/endeca', body)
        .then((response) => {
            console.log(" put http://localhost:9001/endecasubmonprd/endeca result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 