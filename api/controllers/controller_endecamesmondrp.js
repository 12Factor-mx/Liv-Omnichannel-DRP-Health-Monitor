
const
Endecalmondrp = require('../model/endecamesmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
Endecalmondrp.find()
    .then(endecamesmondrp => {
        res.send(endecamesmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamesmondrp."
        });
    });
};

exports.findOneServer = (req, res) => {
Endecalmondrp.findById("eCommerceMesaServidores-" + req.params.endecamesmondrpserver)
    .then(endecamesmondrp => {
        res.send(endecamesmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamesmondrp."
        });
    });
};

exports.findOneServerService = (req, res) => {

var server = req.params.endecamesmondrpserver
var service = req.params.endecamesmondrpserverservice
var queryfield = "eCommerceMesaServidores-" + server + "-Servicio-" + service
var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
//var queryObject = JSON.parse(queryString)   

Endecalmondrp.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield } } })
    .then(endecamesmondrp => {
        res.send(endecamesmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamesmondrp."
        });
    });
};

exports.update = (req, res) => {
Endecalmondrp.findByIdAndUpdate(req.params.endecamesmondrpId, req.body, {new: true })
    .then(Endecalmondrp => {
        if (!Endecalmondrp) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamesmondrpId
            });
        }
        res.send(Endecalmondrp);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamesmondrpId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.endecamesmondrpId
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
    percentage = (consistente / inconsistente) * 100;


    req.body.nombre = "XXXXXXXXXXXXXXXXX endeca ";
    req.body.consistente = consistente;
    req.body.inconsistente = inconsistente
    req.body.percentage = percentage.toString();
    req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
    req.body.estadoDestalle = endecaStatusTotals;


    /*----------------------------------------------------------------------*/

    updateEndecaLMonDrpStatus(req.body).then((response) => {

        return res.send(response);

    }).catch(e => {
        return res.send({
            message: "Error updating EndecaMonDrpStatus status " + e
        });
    });
    /*----------------------------------------------------------------------*/

}).catch(e => {
    return res.send({
        message: "Error getting endeca " + e
    });
})

};

const getEndecaLMonDrpStatus = () => {
return axios.get('http://localhost:9001/endecamesmondrp')
    .then((response) => {
        console.log(" get http://localhost:9001/endecamesmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

const updateEndecaLMonDrpStatus = (body) => {
return axios.put('http://localhost:9001/endecamesmondrp/endeca', body)
    .then((response) => {
        console.log(" put http://localhost:9001/endecamesmondrp/endeca result: \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

exports.updateOneServer= (req, res) => {
    var server = req.params.endecamesmondrpserver
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceMesaServidores-" + server },
        {
            $set: {
                "porcentaje": porcentaje,
                "estado": estado
            }
        },
        {new: true })
        .then(endecamesmondrp => {
            res.send(endecamesmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamesmondrp."
            });
        });
};

exports.updateOneServerService = (req, res) => {
    var server = req.params.endecamesmondrpserver
    var service = req.params.endecamesmondrpserverservice
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceMesaServidores-" + server}, 
                         { $set: { "servicios.$[s].porcentaje": porcentaje, 
                                   "servicios.$[s].estado": estado } },
                         { arrayFilters: [{ "s.nombre": service }] , new:true})
        .then(endecamesmondrp => {
            res.send(endecamesmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamesmondrp."
            });
        });
};

exports.updateOneServerServiceComponent = (req, res) => {
    var server = req.params.endecamesmondrpserver
    var service = req.params.endecamesmondrpserverservice
    var component = req.params.endecamesmondrpserverscomponent
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceMesaServidores-" + server },
        { $set: { "servicios.$[s].componentes.$[c].porcentaje": porcentaje } , 
                  "servicios.$[s].componentes.$[c].estado": estado},
        { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }], new: true })
        .then(endecamesmondrp => {
            res.send(endecamesmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamesmondrp."
            });
        });
};