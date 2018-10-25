
const
    Ecommercemulmonprd = require('../model/ecommercemulmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercemulmonprd.find()
        .then(ecommercemulmonprd => {
            res.send(ecommercemulmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercemulmonprd."
            });
        });
};

exports.update = (req, res) => {
    Ecommercemulmonprd.findByIdAndUpdate(req.params.ecommercemulmonprdId, req.body, { new: true })
        .then(Ecommercemulmonprd => {
            if (!Ecommercemulmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercemulmonprdId
                });
            }
            res.send(Ecommercemulmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercemulmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercemulmonprdId
            });
        });
};

exports.updateParents = (req, res) => {

    getEcommercemulmonPrdStatus().then((response) => {

        const eCommerceStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(eCommerceStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "eCommerceMultisitios"; 
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = eCommerceStatusTotals;


        /*----------------------------------------------------------------------*/

        updateRootLMonPrdStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EcommerceMulMonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce Mul" + e
        });
    })

};

const getEcommercemulmonPrdStatus = () => {
    return axios.get('http://localhost:9001/ecommercemulmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercemulmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/rootmonprd/eCommerceMultisitios', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmonprd/eCommerceMultisitios result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 