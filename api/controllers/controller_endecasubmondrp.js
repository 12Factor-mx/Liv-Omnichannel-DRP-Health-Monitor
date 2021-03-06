
const
Endecalmondrp = require('../model/endecasubmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
Endecalmondrp.find()
    .then(endecasubmondrp => {
        res.send(endecasubmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecasubmondrp."
        });
    });
};

exports.findOneServer = (req, res) => {
Endecalmondrp.findById("eCommerceSuburbiaServidores-" + req.params.endecasubmondrpserver)
    .then(endecasubmondrp => {
        res.send(endecasubmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecasubmondrp."
        });
    });
};

exports.findOneServerService = (req, res) => {

var server = req.params.endecasubmondrpserver
var service = req.params.endecasubmondrpserverservice
var queryfield = "eCommerceSuburbiaServidores-" + server + "-Servicio-" + service
var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
//var queryObject = JSON.parse(queryString)   

Endecalmondrp.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield } } })
    .then(endecasubmondrp => {
        res.send(endecasubmondrp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecasubmondrp."
        });
    });
};

exports.update = (req, res) => {
Endecalmondrp.findByIdAndUpdate(req.params.endecasubmondrpId, req.body, {new: true })
    .then(Endecalmondrp => {
        if (!Endecalmondrp) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecasubmondrpId
            });
        }
        res.send(Endecalmondrp);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecasubmondrpId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.endecasubmondrpId
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
return axios.get('http://localhost:9001/endecasubmondrp')
    .then((response) => {
        console.log(" get http://localhost:9001/endecasubmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

const updateEndecaLMonDrpStatus = (body) => {
return axios.put('http://localhost:9001/ecommercesubmondrp/EndecaSuburbia', body)
    .then((response) => {
        console.log(" put http://localhost:9001/ecommercesubmondrp/EndecaSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

exports.updateOneServer= (req, res) => {
    var server = req.params.endecasubmondrpserver
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceSuburbiaServidores-" + server },
        {
            $set: {
                "porcentaje": porcentaje,
                "estado": estado
            }
        },
        {new: true })
        .then(endecasubmondrp => {
            res.send(endecasubmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecasubmondrp."
            });
        });
};

exports.updateOneServerService = (req, res) => {
    var server = req.params.endecasubmondrpserver
    var service = req.params.endecasubmondrpserverservice
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceSuburbiaServidores-" + server}, 
                         { $set: { "servicios.$[s].porcentaje": porcentaje, 
                                   "servicios.$[s].estado": estado } },
                         { arrayFilters: [{ "s.nombre": service }] , new:true})
        .then(endecasubmondrp => {
            res.send(endecasubmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecasubmondrp."
            });
        });
};

exports.updateOneServerServiceComponent = (req, res) => {
    var server = req.params.endecasubmondrpserver
    var service = req.params.endecasubmondrpserverservice
    var component = req.params.endecasubmondrpserverscomponent
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmondrp.update({ "_id": "eCommerceSuburbiaServidores-" + server },
        { $set: { "servicios.$[s].componentes.$[c].porcentaje": porcentaje } , 
                  "servicios.$[s].componentes.$[c].estado": estado},
        { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }], new: true })
        .then(endecasubmondrp => {
            res.send(endecasubmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecasubmondrp."
            });
        });
};