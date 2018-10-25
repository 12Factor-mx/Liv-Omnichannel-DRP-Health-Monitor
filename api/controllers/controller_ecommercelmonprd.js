
const
    Ecommercelmonprd = require('../model/ecommercelmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercelmonprd.find()
        .then(ecommercelmonprd => {
            res.send(ecommercelmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercelmonprd."
            });
        });
};

exports.update = (req, res) => {
    Ecommercelmonprd.findByIdAndUpdate(req.params.ecommercelmonprdId, req.body, { new: true })
        .then(Ecommercelmonprd => {
            if (!Ecommercelmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmonprdId
                });
            }
            res.send(Ecommercelmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercelmonprdId
            });
        });
};

exports.updateParents = (req, res) => {

    getECommerceLMonPrdStatus().then((response) => {

        const eCommerceStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(eCommerceStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "eCommerceLiverpool"; 
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
                message: "Error updating EcommerceMonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce " + e
        });
    })

};

const getECommerceLMonPrdStatus = () => {
    return axios.get('http://localhost:9001/ecommercelmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercelmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/rootmonprd/eCommerceLiverpool', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmonprd/eCommerceLiverpool result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 