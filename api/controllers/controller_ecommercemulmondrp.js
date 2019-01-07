
const
    Ecommercemulmondrp = require('../model/ecommercemulmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercemulmondrp.find()
        .then(ecommercemulmondrp => {
            res.send(ecommercemulmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercemulmondrp."
            });
        });
};

exports.update = (req, res) => {
    Ecommercemulmondrp.findByIdAndUpdate(req.params.ecommercemulmondrpId, req.body, {new: true })
        .then(Ecommercemulmondrp => {
            if (!Ecommercemulmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercemulmondrpId
                });
            }
            res.send(Ecommercemulmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercemulmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercemulmondrpId
            });
        });
};

exports.updateParents = (req, res) => {

    getEcommercemulmonDrpStatus().then((response) => {

        const eCommerceStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )


        consistente = parseInt(eCommerceStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente == response.length ? 100 : (inconsistente / response.length) * 100);

        //req.body.nombre = "eCommerceMesa";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.porcentaje = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = eCommerceStatusTotals;


        /*----------------------------------------------------------------------*/

        updateRootLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EcommerceMulMonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce Mul" + e
        });
    })

};

const getEcommercemulmonDrpStatus = () => {
    return axios.get('http://localhost:9001/ecommercemulmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercemulmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/rootmondrp/eCommerceMultisitios', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmondrp/eCommerceMultisitios result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}