
const
    Ecommercemesmonprd = require('../model/ecommercemesmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Ecommercemesmonprd.find()
        .then(ecommercemesmonprd => {
            res.send(ecommercemesmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando ecommercemesmonprd."
            });
        });
};

exports.update = (req, res) => {
    Ecommercemesmonprd.findByIdAndUpdate(req.params.ecommercemesmonprdId, req.body, { new: true })
        .then(Ecommercemesmonprd => {
            if (!Ecommercemesmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.ecommercemesmonprdId
                });
            }
            res.send(Ecommercemesmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note1 not found with id " + req.params.ecommercemesmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.ecommercemesmonprdId
            });
        });
};

exports.updateParents = (req, res) => {

    getEcommercemesmonPrdStatus().then((response) => {

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

        updateRootLMonPrdStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating EcommerceMesMonPrdStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting ecommerce Mes" + e
        });
    })

};

const getEcommercemesmonPrdStatus = () => {
    return axios.get('http://localhost:9001/ecommercemesmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/ecommercemesmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateRootLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/rootmonprd/eCommerceMesa', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootlmonprd/eCommerceMesa result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 