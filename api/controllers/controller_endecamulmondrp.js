const
Endecalmondrp = require('../model/endecamulmondrp.js');

const axios = require('axios');

exports.findAll = (req, res) => {
Endecalmondrp.find()
    .then(endecamulmondrp => {
        res.send(endecamulmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamulmondrp."
        });
    });
};

exports.findOneServer = (req, res) => {
Endecalmondrp.findById("eCommerceMultisitiosServidores-" + req.params.endecamulmondrpserver)
    .then(endecamulmondrp => {
        res.send(endecamulmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamulmondrp."
        });
    });
};

exports.findOneServerService = (req, res) => {
var server = req.params.endecamulmondrpserver
var service = req.params.endecamulmondrpserverservice
var queryfield = "eCommerceMultisitiosServidores-" + server + "-Servicio-" + service
var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
Endecalmondrp.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield } } })
    .then(endecamulmondrp => {
        res.send(endecamulmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamulmondrp."
        });
    });
};

exports.update = (req, res) => {
Endecalmondrp.findByIdAndUpdate(req.params.endecamulmondrpId, req.body, {new: true })
    .then(Endecalmondrp => {
        if (!Endecalmondrp) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamulmondrpId
            });
        }
        res.send(Endecalmondrp);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamulmondrpId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.endecamulmondrpId
        });
    });
};

exports.updateParents = (req, res) => {
getEndecaLMonDrpStatus().then((response) => {
    const endecaStatusTotals = response.reduce(
        (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
        {}
    )
    consistente = parseInt(endecaStatusTotals["consistente"]);
    consistente = (isNaN(consistente) ? 0 : consistente)
    inconsistente = response.length - consistente;
    percentage = (consistente == response.length ? 100 : (1 - (inconsistente / response.length)) * 100);

    req.body.consistente = consistente;
    req.body.inconsistente = inconsistente
    req.body.porcentaje = percentage.toString();
    req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
    req.body.estadoDestalle = endecaStatusTotals;

    updateEndecaLMonDrpStatus(req.body).then((response) => {
        return res.send(response);
    }).catch(e => {
        return res.send({
            message: "Error updating EndecaMonDrpStatus status " + e
        });
    });
}).catch(e => {
    return res.send({
        message: "Error getting endeca " + e
    });
})
};

const getEndecaLMonDrpStatus = () => {
return axios.get('http://localhost:9001/endecamulmondrp')
    .then((response) => {
        console.log(" get http://localhost:9001/endecamulmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

const updateEndecaLMonDrpStatus = (body) => {
return axios.put('http://localhost:9001/ecommercemulmondrp/EndecaMultisitios', body)
    .then((response) => {
        console.log(" put http://localhost:9001/ecommercemulmondrp/EndecaMultisitios result: \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

exports.updateOneServer= (req, res) => {
    var server = req.params.endecamulmondrpserver
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceMultisitiosServidores-" + server },
        {
            $set: {
                "porcentaje": porcentaje,
                "estado": estado
            }
        },
        {new: true })
        .then(endecamulmondrp => {
            res.send(endecamulmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamulmondrp."
            });
        });
};

exports.updateOneServerService = (req, res) => {
    var server = req.params.endecamulmondrpserver
    var service = req.params.endecamulmondrpserverservice
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceMultisitiosServidores-" + server}, 
                         { $set: { "servicios.$[s].porcentaje": porcentaje, 
                                   "servicios.$[s].estado": estado } },
                         { arrayFilters: [{ "s.nombre": service }] , new:true})
        .then(endecamulmondrp => {
            res.send(endecamulmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamulmondrp."
            });
        });
};

exports.updateOneServerServiceComponent = (req, res) => {
    var server = req.params.endecamulmondrpserver
    var service = req.params.endecamulmondrpserverservice
    var component = req.params.endecamulmondrpserverscomponent
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceMultisitiosServidores-" + server },
        { $set: { "servicios.$[s].componentes.$[c].porcentaje": porcentaje } , 
                  "servicios.$[s].componentes.$[c].estado": estado},
        { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }], new: true })
        .then(endecamulmondrp => {
            res.send(endecamulmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamulmondrp."
            });
        });
};