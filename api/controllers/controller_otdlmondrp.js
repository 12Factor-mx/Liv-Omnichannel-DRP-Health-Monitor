
const
    Otdlmondrp = require('../model/otdlmondrp.js');


const axios = require('axios');


exports.findAll = (req, res) => {
    Otdlmondrp.find()
        .then(otdlmondrp => {
            res.send(otdlmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando otdlmondrp."
            });
        });
};

exports.updateOneOTDServerComponent = (req, res) => {

    var otdServer = req.params.otdlmondrpOTDServerId
    var otdComponent = req.params.otdlmondrpOTDComponentId
    var estado = req.body.estado
    var porcentaje = req.body.porcentaje
    Otdlmondrp.update(

        {
          _id: otdServer
        },

        { $set: { "componentes.$[o].estado": estado,
                  "componentes.$[o].porcentaje": porcentaje
                  }
                  },

        {
          arrayFilters: [{
            "o.nombre": otdComponent
          }]
        }

    )
        .then(Otdlmondrp => {
            if (!Otdlmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.otdlmondrpId
                });
            }
            res.send(Otdlmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.otdlmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.otdlmondrpId
            })
        })
}

exports.updateOneServer = (req, res) => {

    var otdServer = req.params.otdlmondrpOTDServerId

    Otdlmondrp.findByIdAndUpdate(

        { _id:otdServer}, req.body, { new: true }

    )
        .then(Otdlmondrp => {
            if (!Otdlmondrp) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.otdlmondrpId
                });
            }
            res.send(Otdlmondrp);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.otdlmondrpId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.otdlmondrpId
            })
        })
}


exports.updateParents = (req, res) => {

    getOtdLMonDrpStatus().then((response) => {

        const otdStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(otdStatusTotals["consistente"]);
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        inconsistente == 0 ? percentage = 100 : percentage = (consistente / inconsistente) * 100;


       // req.body.nombre = "Otd";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = otdStatusTotals;


        /*----------------------------------------------------------------------*/

        updateOtdLMonDrpStatus(req.body).then((response) => {

            return res.send(response);

        }).catch(e => {
            return res.send({
                message: "Error updating OtdLMonDrpStatus status " + e
            });
        });
        /*----------------------------------------------------------------------*/

    }).catch(e => {
        return res.send({
            message: "Error getting otd " + e
        });
    })

};


const getOtdLMonDrpStatus = () => {
    return axios.get('http://localhost:9001/otdlmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/otdlmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateOtdLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/otdlmondrp/upadateroot', body)
        .then((response) => {
            console.log(" put http://localhost:9001/otdlmondrp/upadateroot result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
