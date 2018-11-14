
const
    Originlmondrp = require('../model/originlmondrp.js');
    ECommercelmondrp = require('../model/ecommercelmondrp')

const axios = require('axios');


exports.findAll = (req, res) => {
    Originlmondrp.find()
        .then(originlmondrp => {
            res.send(originlmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando originlmondrp."
            });
        });
};

exports.update = (req, res) => {

    var originId = req.params.originlmondrpId
    var originName = req.params.originlmondrpName
    var estado = req.body.estado
    Originlmondrp.update(

        { _id: originId },

        { $set: { "origins.$[o].estado": estado } },

        { arrayFilters: [{ "o.nombre": originName}] }

    )
        .then(Originlmondrp => {
            if (!Originlmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmondrpId
                });
            }
            res.send(Originlmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.originlmondrpId
            })
        })
}


exports.updateRoot = (req, res) => {


    ECommercelmondrp.findByIdAndUpdate(

        { _id:"OriginLiverpool"}, req.body, { new: true }

    )
        .then(Originlmondrp => {
            if (!Originlmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmondrpId
                });
            }
            res.send(Originlmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originlmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.originlmondrpId
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
    return axios.get('http://localhost:9001/originlmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/originlmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateOriginLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/originlmondrp/upadateroot', body)
        .then((response) => {
            console.log(" put http://localhost:9001/originlmondrp/upadateroot result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
