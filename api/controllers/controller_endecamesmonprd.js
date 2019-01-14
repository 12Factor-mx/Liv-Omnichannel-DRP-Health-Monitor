
const
Endecalmonprd = require('../model/endecamesmonprd.js');

const axios = require('axios');


exports.findAll = (req, res) => {
Endecalmonprd.find()
    .then(endecamesmonprd => {
        res.send(endecamesmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamesmonprd."
        });
    });
};

exports.findOneServer = (req, res) => {
Endecalmonprd.findById("eCommerceMesaServidores-" + req.params.endecamesmonprdserver)
    .then(endecamesmonprd => {
        res.send(endecamesmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamesmonprd."
        });
    });
};

exports.findOneServerService = (req, res) => {

var server = req.params.endecamesmonprdserver
var service = req.params.endecamesmonprdserverservice
var queryfield = "eCommerceMesaServidores-" + server + "-Servicio-" + service
var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
//var queryObject = JSON.parse(queryString)   

Endecalmonprd.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield}}} )
    .then(endecamesmonprd => {
        res.send(endecamesmonprd);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error recuperando endecamesmonprd."
        });
    });
};

exports.update = (req, res) => {
Endecalmonprd.findByIdAndUpdate(req.params.endecamesmonprdId, req.body, {new: true })
    .then(Endecalmonprd => {
        if (!Endecalmonprd) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamesmonprdId
            });
        }
        res.send(Endecalmonprd);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.endecamesmonprdId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.endecamesmonprdId
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



    // req.body.nombre = "XXXXXXXXXXXXXXXXX endeca ";
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
return axios.get('http://localhost:9001/endecamesmonprd')
    .then((response) => {
        console.log(" get http://localhost:9001/endecamesmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

const updateEndecaLMonPrdStatus = (body) => {
// console.log(JSON.stringify(body,undefined,2))    
return axios.put('http://localhost:9001/ecommercemesmonprd/EndecaMesa', body)
    .then((response) => {
        console.log(" put http://localhost:9001/endecamesmonprd/EndecaMesa result: \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
}

exports.updateOneServer= (req, res) => {
    var server = req.params.endecamesmonprdserver
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceMesaServidores-" + server },
        {
            $set: {
                "porcentaje": porcentaje,
                "estado": estado
            }
        },
        {new: true })
        .then(endecamesmonprd => {
            res.send(endecamesmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamesmonprd."
            });
        });
};

exports.updateOneServerService = (req, res) => {
    var server = req.params.endecamesmonprdserver
    var service = req.params.endecamesmonprdserverservice
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceMesaServidores-" + server}, 
                         { $set: { "servicios.$[s].porcentaje": porcentaje, 
                                   "servicios.$[s].estado": estado } },
                         { arrayFilters: [{ "s.nombre": service }] , new:true})
        .then(endecamesmonprd => {
            res.send(endecamesmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamesmonprd."
            });
        });
};

exports.updateOneServerServiceComponent = (req, res) => {
    var server = req.params.endecamesmonprdserver
    var service = req.params.endecamesmonprdserverservice
    var component = req.params.endecamesmonprdserverscomponent
    var porcentaje = req.body.porcentaje
    var estado = req.body.estado
    Endecalmonprd.update({ "_id": "eCommerceMesaServidores-" + server },
        { $set: { "servicios.$[s].componentes.$[c].porcentaje": porcentaje } , 
                  "servicios.$[s].componentes.$[c].estado": estado},
        { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }], new: true })
        .then(endecamesmonprd => {
            res.send(endecamesmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecamesmonprd."
            });
        });
};