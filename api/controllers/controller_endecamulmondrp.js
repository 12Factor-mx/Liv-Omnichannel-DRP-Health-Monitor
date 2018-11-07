
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
//var queryObject = JSON.parse(queryString)   

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
return axios.put('http://localhost:9001/endecamulmondrp/endeca', body)
    .then((response) => {
        console.log(" put http://localhost:9001/endecamulmondrp/endeca result: \n" + JSON.stringify(response.data, undefined, 2));
        return response.data;
    })
    .catch(e => {
        console.log(e)
        return e.message
    })
} 