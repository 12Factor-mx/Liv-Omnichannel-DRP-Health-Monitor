
const
    Ecommercemesmondrp = require('../model/ecommercemesmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercemesmondrp.find()
        .then(ecommercemesmondrp => {
            res.send(ecommercemesmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercemesmondrp."
            });
        });
};

exports.update = (req, res) => {
    Ecommercemesmondrp.findByIdAndUpdate(req.params.ecommercemesmondrpId, req.body, {new: true })
        .then(Ecommercemesmondrp => {
            if (!Ecommercemesmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercemesmondrpId
                });
            }
            res.send(Ecommercemesmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercemesmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercemesmesdrpId
            });
        });
};

exports.updateParents = (req, res) => {

    getEcommercemesmonDrpStatus().then((response) => {

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
                message: "Error updating EcommerceMulMesDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce Mesa" + e
        });
    })

};

const getEcommercemesmonDrpStatus = () => {
    return axios.get('http://localhost:9001/ecommercemesmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercemesmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/rootmondrp/eCommerceMesa', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmondrp/eCommerceMesa result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}