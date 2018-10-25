
const
    Endecamulmonprd = require('../model/endecamulmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Endecamulmonprd.find()
        .then(endecamulmonprd => {
            res.send(endecamulmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamulmonprd."
            });
        });
};

exports.update = (req, res) => {
    Endecamulmonprd.findByIdAndUpdate(req.params.endecamulmonprdId, req.body, {new: true })
        .then(Endecamulmonprd => {
            if (!Endecamulmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecamulmonprdId
                });
            }
            res.send(Endecamulmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecamulmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.endecamulmonprdId
            });
        });
};

exports.updateParents = (req, res) => {

    getEndecamulmonPrdStatus().then((response) => {

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

        updateEndecamulmonPrdStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EndecaMonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting endeca " + e
        });
    })

};

const getEndecamulmonPrdStatus = () => {
    return axios.get('http://localhost:9001/endecamulmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/endecamulmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateEndecamulmonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/endecamulmonprd/endeca', body)
        .then((response) => {
            console.log(" put http://localhost:9001/endecamulmonprd/endeca result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 