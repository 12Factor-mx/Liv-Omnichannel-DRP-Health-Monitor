
const
    Ecommercesubmondrp = require('../model/ecommercesubmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercesubmondrp.find()
        .then(ecommercesubmondrp => {
            res.send(ecommercesubmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercesubmondrp."
            });
        });
};

exports.update = (req, res) => {
    Ecommercesubmondrp.findByIdAndUpdate(req.params.ecommercesubmondrpId, req.body, {new: true })
        .then(Ecommercesubmondrp => {
            if (!Ecommercesubmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercesubmondrpId
                });
            }
            res.send(Ecommercesubmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercesubmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercesubmondrpId
            });
        });
};

exports.updateParents = (req, res) => {

    getEcommercesubmonDrpStatus().then((response) => {

        const eCommerceStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(eCommerceStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "eCommerceSuburbia";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = eCommerceStatusTotals;


        /*----------------------------------------------------------------------*/

        updateRootLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EcommerceSubMonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce Suburbia" + e
        });
    })

};

const getEcommercesubmonDrpStatus = () => {
    return axios.get('http://localhost:9001/ecommercesubmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercesubmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/rootmondrp/eCommerceSuburbia', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmondrp/eCommerceSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}