const Otdlmondrp = require('../model/otdsubmondrp.js');
const axios = require('axios');

exports.findAll = (req, res) => {
  Otdlmondrp.find()
    .then(otdsubmondrp => {
      res.send(otdsubmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmondrp."
      });
    });
};

exports.findOneServer = (req, res) => {
  Otdlmondrp.findById("OtdLiverpoolServidores-" + req.params.otdlmondrpserver)
    .then(otdsubmondrp => {
      res.send(otdsubmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmondrp."
      });
    });
};

exports.findOneServerService = (req, res) => {

  var server = req.params.otdlmondrpserver
  var service = req.params.otdlmondrpserverservice
  var queryfield = "OtdLiverpoolServidores-" + server + "-Servicio-" + service

  Otdlmondrp.find({
      "servicios._id": queryfield
    }, {
      "_id": "0",
      "servicios": {
        "$elemMatch": {
          "_id": queryfield
        }
      }
    })
    .then(otdsubmondrp => {
      res.send(otdsubmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmondrp."
      });
    });
};

exports.update = (req, res) => {
  Otdlmondrp.findByIdAndUpdate(req.params.otdlmondrpId, req.body, {
      new: true
    })
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
      });
    });
};

exports.updateOneServer = (req, res) => {

  var server = req.params.otdlmondrpserver
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdlmondrp.update({
      "_id": "OtdLiverpoolServidores-" + server
    }, {
      $set: {
        "porcentaje": porcentaje,
        "estado": estado
      }
    }, {
      new: true
    })
    .then(otdsubmondrp => {
      res.send(otdsubmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmondrp."
      });
    });
};

exports.updateOneServerService = (req, res) => {

  var server = req.params.otdlmondrpserver
  var service = req.params.otdlmondrpserverservice
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdlmondrp.update({
      "_id": "OtdLiverpoolServidores-" + server
    }, {
      $set: {
        "servicios.$[s].porcentaje": porcentaje,
        "servicios.$[s].estado": estado
      }
    }, {
      arrayFilters: [{
        "s.nombre": service
      }],
      new: true
    })
    .then(otdsubmondrp => {
      res.send(otdsubmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmondrp."
      });
    });
};

exports.updateOneServerServiceComponent = (req, res) => {

  var server = req.params.otdlmondrpserver
  var service = req.params.otdlmondrpserverservice
  var component = req.params.otdlmondrpserverscomponent
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdlmondrp.update({
      "_id": "OtdLiverpoolServidores-" + server
    }, {
      $set: {
        "servicios.$[s].componentes.$[c].porcentaje": porcentaje
      },
      "servicios.$[s].componentes.$[c].estado": estado
    }, {
      arrayFilters: [{
        "s.nombre": service
      }, {
        "c.nombre": component
      }],
      new: true
    })
    .then(otdsubmondrp => {
      res.send(otdsubmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmondrp."
      });
    });
};

exports.updateParents = (req, res) => {

  getOtdLMonDrpStatus().then((response) => {

    const otdStatusTotals = response.reduce(
      (totals, p) => ({ ...totals,
        [p.estado]: (totals[p.estado] || 0) + 1
      }), {}
    )

    consistente = parseInt(otdStatusTotals["consistente"]);
    consistente = (isNaN(consistente) ? 0 : consistente)
    inconsistente = response.length - consistente;
    inconsistente == 0 ? percentage = 100 : percentage = (consistente / inconsistente) * 100;



    req.body.nombre = response.nombre;
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
        message: "Error updating OtdMonDrpStatus status " + e
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
  return axios.get('http://localhost:9001/otdsubmondrp')
    .then((response) => {
      console.log(" get http://localhost:9001/otdsubmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}

const updateOtdLMonDrpStatus = (body) => {
  return axios.put('http://localhost:9001/otdsubmondrp/OtdSuburbia', body)
    .then((response) => {
      console.log(" put http://localhost:9001/otdsubmondrp/OtdSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}