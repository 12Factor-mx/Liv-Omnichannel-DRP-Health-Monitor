const Otdmesmondrp = require('../model/otdmesmondrp.js');
const axios = require('axios');

exports.findAll = (req, res) => {
  Otdmesmondrp.find()
    .then(otdmesmondrp => {
      res.send(otdmesmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmondrp."
      });
    });
};

exports.findOneServer = (req, res) => {
  Otdmesmondrp.findById("OtdMesaServidores-" + req.params.otdmesmondrpserver)
    .then(otdmesmondrp => {
      res.send(otdmesmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmondrp."
      });
    });
};

exports.findOneServerService = (req, res) => {

  var server = req.params.otdmesmondrpserver
  var service = req.params.otdmesmondrpserverservice
  var queryfield = "OtdMesaServidores-" + server + "-Servicio-" + service

  Otdmesmondrp.find({
      "servicios._id": queryfield
    }, {
      "_id": "0",
      "servicios": {
        "$elemMatch": {
          "_id": queryfield
        }
      }
    })
    .then(otdmesmondrp => {
      res.send(otdmesmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmondrp."
      });
    });
};

exports.update = (req, res) => {
  Otdmesmondrp.findByIdAndUpdate(req.params.otdmesmondrpId, req.body, {
      new: true
    })
    .then(Otdmesmondrp => {
      if (!Otdmesmondrp) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmesmondrpId
        });
      }
      res.send(Otdmesmondrp);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmesmondrpId
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.otdmesmondrpId
      });
    });
};

exports.updateOneServer = (req, res) => {

  var server = req.params.otdmesmondrpserver
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmesmondrp.update({
      "_id": "OtdMesaServidores-" + server
    }, {
      $set: {
        "porcentaje": porcentaje,
        "estado": estado
      }
    }, {
      new: true
    })
    .then(otdmesmondrp => {
      res.send(otdmesmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmondrp."
      });
    });
};

exports.updateOneServerService = (req, res) => {

  var server = req.params.otdmesmondrpserver
  var service = req.params.otdmesmondrpserverservice
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmesmondrp.update({
      "_id": "OtdMesaServidores-" + server
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
    .then(otdmesmondrp => {
      res.send(otdmesmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmondrp."
      });
    });
};

exports.updateOneServerServiceComponent = (req, res) => {

  var server = req.params.otdmesmondrpserver
  var service = req.params.otdmesmondrpserverservice
  var component = req.params.otdmesmondrpserverscomponent
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmesmondrp.update({
      "_id": "OtdMesaServidores-" + server
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
    .then(otdmesmondrp => {
      res.send(otdmesmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmondrp."
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
    percentage = (consistente == response.length ? 100 : (1 - (inconsistente / response.length)) * 100);

    req.body.consistente = consistente;
    req.body.inconsistente = inconsistente
    req.body.porcentaje = percentage.toString();
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
  return axios.get('http://localhost:9001/otdmesmondrp')
    .then((response) => {
      console.log(" get http://localhost:9001/otdmesmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}

const updateOtdLMonDrpStatus = (body) => {
  return axios.put('http://localhost:9001/ecommercesubmondrp/OTDSuburbia', body)
    .then((response) => {
      console.log(" put http://localhost:9001/ecommercesubmondrp/OTDSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}