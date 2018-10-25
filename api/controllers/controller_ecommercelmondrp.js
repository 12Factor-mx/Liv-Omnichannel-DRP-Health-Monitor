
const
    Ecommercelmondrp = require('../model/ecommercelmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercelmondrp.find()
        .then(ecommercelmondrp => {
            res.send(ecommercelmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercelmondrp."
            });
        });
};

exports.update = (req, res) => {
    Ecommercelmondrp.findByIdAndUpdate(req.params.ecommercelmondrpId, req.body, {new: true })
        .then(Ecommercelmondrp => {
            if (!Ecommercelmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmondrpId
                });
            }
            res.send(Ecommercelmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercelmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercelmondrpId
            });
        });
};

exports.updateParents = (req, res) => {

    getECommerceLMonDrpStatus().then((response) => {

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

        updateRootLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EcommerceMonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce " + e
        });
    })

};

const getECommerceLMonDrpStatus = () => {
    return axios.get('http://localhost:9001/ecommercelmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercelmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/rootmondrp/eCommerceLiverpool', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmondrp/eCommerceLiverpool result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 