
const
    Ecommercesubmonprd = require('../model/ecommercesubmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercesubmonprd.find()
        .then(ecommercesubmonprd => {
            res.send(ecommercesubmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercesubmonprd."
            });
        });
};

exports.update = (req, res) => {
    Ecommercesubmonprd.findByIdAndUpdate(req.params.ecommercesubmonprdId, req.body, { new: true })
        .then(Ecommercesubmonprd => {
            if (!Ecommercesubmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercesubmonprdId
                });
            }
            res.send(Ecommercesubmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercesubmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercesubmonprdId
            });
        });
};

exports.updateParents = (req, res) => {

    getEcommercesubmonPrdStatus().then((response) => {

        const eCommerceStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

       consistente = parseInt(eCommerceStatusTotals["consistente"]);
       consistente = (isNaN(consistente) ? 0 : consistente)
       inconsistente = response.length - consistente;
       percentage = (consistente == response.length ? 100 : (1 - (inconsistente / response.length)) * 100);

       req.body.consistente = consistente;
       req.body.inconsistente = inconsistente
       req.body.porcentaje = percentage.toString();
       req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
       req.body.estadoDestalle = eCommerceStatusTotals;

        /*----------------------------------------------------------------------*/

        updateRootLMonPrdStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EcommerceSubMonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce Mul" + e
        });
    })

};

const getEcommercesubmonPrdStatus = () => {
    return axios.get('http://localhost:9001/ecommercesubmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercesubmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/rootmonprd/eCommerceSuburbia', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmonprd/eCommerceSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 