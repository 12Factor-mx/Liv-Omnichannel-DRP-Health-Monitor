
const
Endecalmonprd = require('../model/endecasubmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
Endecalmonprd.find()
    .then(endecasubmonprd => {
        res.send(endecasubmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecasubmonprd."
        });
    });
};

exports.findOneServer = (req, res) => {
Endecalmonprd.findById("eCommerceSuburbiaServidores-" + req.params.endecasubmonprdserver)
    .then(endecasubmonprd => {
        res.send(endecasubmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecasubmonprd."
        });
    });
};

exports.findOneServerService = (req, res) => {

var server = req.params.endecasubmonprdserver
var service = req.params.endecasubmonprdserverservice
var queryfield = "eCommerceSuburbiaServidores-" + server + "-Servicio-" + service
var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
//var queryObject = JSON.parse(queryString)   

Endecalmonprd.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield}}} )
    .then(endecasubmonprd => {
        res.send(endecasubmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecasubmonprd."
        });
    });
};

exports.update = (req, res) => {
Endecalmonprd.findByIdAndUpdate(req.params.endecasubmonprdId, req.body, {new: true })
    .then(Endecalmonprd => {
        if (!Endecalmonprd) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecasubmonprdId
            });
        }
        res.send(Endecalmonprd);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecasubmonprdId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.endecasubmonprdId
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
   percentage = (consistente == response.length ? 100 : (1 - (inconsistente / response.length)) * 100);

   req.body.consistente = consistente;
   req.body.inconsistente = inconsistente
   req.body.porcentaje = percentage.toString();
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
return axios.get('http://localhost:9001/endecasubmonprd')
    .then((response) => {
        console.log(" get http://localhost:9001/endecasubmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

const updateEndecaLMonPrdStatus = (body) => {
return axios.put('http://localhost:9001/ecommercesubmonprd/EndecaSuburbia', body)
    .then((response) => {
        console.log(" put http://localhost:9001/ecomercesubmonprd/EndecaSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

exports.updateOneServer= (req, res) => {
    var server = req.params.endecasubmonprdserver
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceSuburbiaServidores-" + server },
        {
            $set: {
                "porcentaje": porcentaje,
                "estado": estado
            }
        },
        {new: true })
        .then(endecasubmonprd => {
            res.send(endecasubmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecasubmonprd."
            });
        });
};

exports.updateOneServerService = (req, res) => {
    var server = req.params.endecasubmonprdserver
    var service = req.params.endecasubmonprdserverservice
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceSuburbiaServidores-" + server}, 
                         { $set: { "servicios.$[s].porcentaje": porcentaje, 
                                   "servicios.$[s].estado": estado } },
                         { arrayFilters: [{ "s.nombre": service }] , new:true})
        .then(endecasubmonprd => {
            res.send(endecasubmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecasubmonprd."
            });
        });
};

exports.updateOneServerServiceComponent = (req, res) => {
    var server = req.params.endecasubmonprdserver
    var service = req.params.endecasubmonprdserverservice
    var component = req.params.endecasubmonprdserverscomponent
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceSuburbiaServidores-" + server },
        { $set: { "servicios.$[s].componentes.$[c].porcentaje": porcentaje } , 
                  "servicios.$[s].componentes.$[c].estado": estado},
        { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }], new: true })
        .then(endecasubmonprd => {
            res.send(endecasubmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecasubmonprd."
            });
        });
};