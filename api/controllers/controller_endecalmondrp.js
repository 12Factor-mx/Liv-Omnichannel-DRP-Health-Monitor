
const
    Endecalmondrp = require('../model/endecalmondrp.js');

const axios = require('axios');


exports.findAll = (req, res) => {
    Endecalmondrp.find()
        .then(endecalmondrp => {
            res.send(endecalmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmondrp."
            });
        });
};

exports.findOneServer = (req, res) => {
    Endecalmondrp.findById("eCommerceLiverpoolServidores-" + req.params.endecalmondrpserver)
        .then(endecalmondrp => {
            res.send(endecalmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmondrp."
            });
        });
};

exports.findOneServerService = (req, res) => {

    var server = req.params.endecalmondrpserver
    var service = req.params.endecalmondrpserverservice
    var queryfield = "eCommerceLiverpoolServidores-" + server + "-Servicio-" + service
    var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
    //var queryObject = JSON.parse(queryString)   

    Endecalmondrp.find({ "servicios._id": queryfield }, { "_id": "0", "servicios": { "$elemMatch": { "_id": queryfield } } })
        .then(endecalmondrp => {
            res.send(endecalmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmondrp."
            });
        });
};

exports.updateOneServerService = (req, res) => {

    var server = req.params.endecalmondrpserver
    var service = req.params.endecalmondrpserverservice
    var component = req.params.endecalmondrpserverscomponent
    var queryfield = "eCommerceLiverpoolServidores-" + server + "-Servicio-" + service + "-Componente-" + component
    var queryString = '{"servicios._id":"' + queryfield + '"},{"_id":"0", "servicios":{"$elemMatch":{"_id":"' + queryfield + '"}}}'
    var estado = req.body.estado
    //var queryObject = JSON.parse(queryString)   

    Endecalmondrp.update({ "_id": "eCommerceLiverpoolServidores-" + server}, 
                         { $set: {"servicios.$[s].componentes.$[c].estado":estado}},
                         { arrayFilters: [{ "s.nombre": service }, { "c.nombre": component }] , new:true})
        .then(endecalmondrp => {
            res.send(endecalmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando endecalmondrp."
            });
        });
};

exports.update = (req, res) => {
    Endecalmondrp.findByIdAndUpdate(req.params.endecalmondrpId, req.body, {new: true })
        .then(Endecalmondrp => {
            if (!Endecalmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecalmondrpId
                });
            }
            res.send(Endecalmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.endecalmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.endecalmondrpId
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
    return axios.get('http://localhost:9001/endecalmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/endecalmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateEndecaLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/endecalmondrp/endeca', body)
        .then((response) => {
            console.log(" put http://localhost:9001/endecalmondrp/endeca result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 