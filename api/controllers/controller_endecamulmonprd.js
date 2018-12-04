
const
Endecalmonprd = require('../model/endecamulmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
Endecalmonprd.find()
    .then(endecamulmonprd => {
        res.send(endecamulmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamulmonprd."
        });
    });
};

exports.findOneServer = (req, res) => {
Endecalmonprd.findById("eCommerceMultisitiosServidores-" + req.params.endecamulmonprdserver)
    .then(endecamulmonprd => {
        res.send(endecamulmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamulmonprd."
        });
    });
};

exports.findOneServerService = (req, res) => {

var server = req.params.endecamulmonprdserver
var service = req.params.endecamulmonprdserverservice
var queryfield = "eCommerceMultisitiosServidores-" + server + "-Servicio-" + service
var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
//var queryObject = JSON.parse(queryString)   

Endecalmonprd.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield}}} )
    .then(endecamulmonprd => {
        res.send(endecamulmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamulmonprd."
        });
    });
};

exports.update = (req, res) => {
Endecalmonprd.findByIdAndUpdate(req.params.endecamulmonprdId, req.body, {new: true })
    .then(Endecalmonprd => {
        if (!Endecalmonprd) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamulmonprdId
            });
        }
        res.send(Endecalmonprd);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamulmonprdId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.endecamulmonprdId
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


    req.body.nombre = "XXXXXXXXXXXXXXXXX endeca ";
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
return axios.get('http://localhost:9001/endecamulmonprd')
    .then((response) => {
        console.log(" get http://localhost:9001/endecamulmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

const updateEndecaLMonPrdStatus = (body) => {
return axios.put('http://localhost:9001/endecamulmonprd/endeca', body)
    .then((response) => {
        console.log(" put http://localhost:9001/endecamulmonprd/endeca result: \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

exports.updateOneServer= (req, res) => {
    var server = req.params.endecamulmonprdserver
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceMultisitiosServidores-" + server },
        {
            $set: {
                "porcentaje": porcentaje,
                "estado": estado
            }
        },
        {new: true })
        .then(endecamulmonprd => {
            res.send(endecamulmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamulmonprd."
            });
        });
};

exports.updateOneServerService = (req, res) => {
    var server = req.params.endecamulmonprdserver
    var service = req.params.endecamulmonprdserverservice
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceMultisitiosServidores-" + server}, 
                         { $set: { "servicios.$[s].porcentaje": porcentaje, 
                                   "servicios.$[s].estado": estado } },
                         { arrayFilters: [{ "s.nombre": service }] , new:true})
        .then(endecamulmonprd => {
            res.send(endecamulmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamulmonprd."
            });
        });
};

exports.updateOneServerServiceComponent = (req, res) => {
    var server = req.params.endecamulmonprdserver
    var service = req.params.endecamulmonprdserverservice
    var component = req.params.endecamulmonprdserverscomponent
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceMultisitiosServidores-" + server },
        { $set: { "servicios.$[s].componentes.$[c].porcentaje": porcentaje } , 
                  "servicios.$[s].componentes.$[c].estado": estado},
        { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }], new: true })
        .then(endecamulmonprd => {
            res.send(endecamulmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamulmonprd."
            });
        });
};