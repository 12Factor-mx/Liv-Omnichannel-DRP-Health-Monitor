
const Endecalmonprd = require('../model/endecalmonprd.js');
const axios = require('axios');

exports.findAll = (req, res) => {
    Endecalmonprd.find()
        .then(endecalmonprd => {
            res.send(endecalmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmonprd."
            });
        });
};

exports.findOneServer = (req, res) => {
    Endecalmonprd.findById("eCommerceLiverpoolServidores-" + req.params.endecalmonprdserver)
        .then(endecalmonprd => {
            res.send(endecalmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmonprd."
            });
        });
};

exports.findOneServerService = (req, res) => {

    var server = req.params.endecalmonprdserver
    var service = req.params.endecalmonprdserverservice
    var queryfield = "eCommerceLiverpoolServidores-" + server + "-Servicio-" + service

    Endecalmonprd.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield}}} )
        .then(endecalmonprd => {
            res.send(endecalmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmonprd."
            });
        });
};

exports.update = (req, res) => {
    Endecalmonprd.findByIdAndUpdate(req.params.endecalmonprdId, req.body, {new: true })
        .then(Endecalmonprd => {
            if (!Endecalmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecalmonprdId
                });
            }
            res.send(Endecalmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecalmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.endecalmonprdId
            });
        });
};

exports.updateOneServer = (req, res) => {

    var server = req.params.endecalmonprdserver
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado

    Endecalmonprd.update({ "_id": "eCommerceLiverpoolServidores-" + server },
        {
            $set: {
                "porcentaje": porcentaje,
                "estado": estado
            }
        },
        { new: true })
        .then(endecalmonprd => {
            res.send(endecalmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmonprd."
            });
        });
};

exports.updateOneServerService = (req, res) => {

    var server = req.params.endecalmonprdserver
    var service = req.params.endecalmonprdserverservice
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado

    Endecalmonprd.update({ "_id": "eCommerceLiverpoolServidores-" + server },
                         { $set: { "servicios.$[s].porcentaje": porcentaje,
                                 "servicios.$[s].estado": estado } },
                         { arrayFilters: [{ "s.nombre": service }
                        ], new: true })
        .then(endecalmonprd => {
            res.send(endecalmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmonprd."
            });
        });
};

exports.updateOneServerServiceComponent = (req, res) => {

    var server = req.params.endecalmonprdserver
    var service = req.params.endecalmonprdserverservice
    var component = req.params.endecalmonprdserverscomponent
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado

    Endecalmonprd.update({ "_id": "eCommerceLiverpoolServidores-" + server },
        { $set: { "servicios.$[s].componentes.$[c].porcentaje": porcentaje } ,
                  "servicios.$[s].componentes.$[c].estado": estado},
        { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }], new: true })
        .then(endecalmonprd => {
            res.send(endecalmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmonprd."
            });
        });
};

exports.updateParents = (req, res) => {

    getEndecaLMonPrdStatus().then((response) => {

        const endecaStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(endecaStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "EndecaLiverpool";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = endecaStatusTotals;


        /*----------------------------------------------------------------------*/

        updateEndecaLMonPrdStatus(req.body).then((response) => {

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

const getEndecaLMonPrdStatus = () => {
    return axios.get('http://localhost:9001/endecalmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/endecalmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateEndecaLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/endecalmonprd/EndecaLiverpool', body)
        .then((response) => {
            console.log(" put http://localhost:9001/endecalmonprd/EndecaLiverpool result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 