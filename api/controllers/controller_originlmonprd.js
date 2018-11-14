
const
    Originlmonprd = require('../model/originlmonprd.js');
    ECommercelmonprd = require('../model/ecommercelmonprd.js')

const axios = require('axios');


exports.findAll = (req, res) => {
    Originlmonprd.find()
        .then(originlmonprd => {
            res.send(originlmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando originlmonprd."
            });
        });
};

exports.update = (req, res) => {

    var originId = req.params.originlmonprdId
    var originName = req.params.originlmonprdName
    var estado = req.body.estado
    Originlmonprd.update(

        { _id: originId },

        { $set: { "origins.$[o].estado": estado } },

        { arrayFilters: [{ "o.nombre": originName}] }

    )
        .then(Originlmonprd => {
            if (!Originlmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmonprdId
                });
            }
            res.send(Originlmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.originlmonprdId
            })
        })
}


exports.updateRoot = (req, res) => {


    ECommercelmonprd.findByIdAndUpdate(

        { _id:"OriginLiverpool"}, req.body, { new: true }

    )
        .then(Originlmonprd => {
            if (!Originlmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmonprdId
                });
            }
            res.send(Originlmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.originlmonprdId
            })
        })
}




exports.updateParents = (req, res) => {

    getOriginLMonDrpStatus().then((response) => {

        const originStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(originStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        inconsistente == 0 ? percentage = 100 : percentage = (consistente / inconsistente) * 100;


       // req.body.nombre = "Origin";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = originStatusTotals;


        /*----------------------------------------------------------------------*/

        updateOriginLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating OriginLMonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting origin " + e
        });
    })

};


const getOriginLMonDrpStatus = () => {
    return axios.get('http://localhost:9001/originlmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/originlmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateOriginLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/originlmonprd/upadateroot', body)
        .then((response) => {
            console.log(" put http://localhost:9001/originlmonprd/upadateroot result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
