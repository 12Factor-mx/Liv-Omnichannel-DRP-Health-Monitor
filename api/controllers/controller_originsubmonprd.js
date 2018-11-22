
const
    Originsubmonprd = require('../model/originsubmonprd.js');
    ECommercesubmonprd = require('../model/ecommercesubmonprd.js')

const axios = require('axios');


exports.findAll = (req, res) => {
    Originsubmonprd.find()
        .then(originsubmonprd => {
            res.send(originsubmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando originsubmonprd."
            });
        });
};

exports.update = (req, res) => {

    var originId = req.params.originsubmonprdId
    var originName = req.params.originsubmonprdName
    var estado = req.body.estado
    Originsubmonprd.update(

        { _id: originId },

        { $set: { "origins.$[o].estado": estado } },

        { arrayFilters: [{ "o.nombre": originName}] }

    )
        .then(Originsubmonprd => {
            if (!Originsubmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originsubmonprdId
                });
            }
            res.send(Originsubmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originsubmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.originsubmonprdId
            })
        })
}


exports.updateRoot = (req, res) => {


    ECommercesubmonprd.findByIdAndUpdate(

        { _id:"OriginSuburbia"}, req.body, { new: true }

    )
        .then(Originsubmonprd => {
            if (!Originsubmonprd) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originsubmonprdId
                });
            }
            res.send(Originsubmonprd);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.originsubmonprdId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.originsubmonprdId
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
    return axios.get('http://localhost:9001/originsubmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/originsubmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateOriginLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/originsubmonprd/upadateroot', body)
        .then((response) => {
            console.log(" put http://localhost:9001/originsubmonprd/upadateroot result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
