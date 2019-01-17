const Otdmulmondrp = require('../model/otdmulmondrp.js');
const axios = require('axios');

exports.findAll = (req, res) => {
  Otdmulmondrp.find()
    .then(otdmulmondrp => {
      res.send(otdmulmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmondrp."
      });
    });
};

exports.findOneServer = (req, res) => {
  Otdmulmondrp.findById("OtdSuburbiaServidores-" + req.params.otdmulmondrpserver)
    .then(otdmulmondrp => {
      res.send(otdmulmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmondrp."
      });
    });
};

exports.findOneServerService = (req, res) => {

  var server = req.params.otdmulmondrpserver
  var service = req.params.otdmulmondrpserverservice
  var queryfield = "OtdSuburbiaServidores-" + server + "-Servicio-" + service

  Otdmulmondrp.find({
      "servicios._id": queryfield
    }, {
      "_id": "0",
      "servicios": {
        "$elemMatch": {
          "_id": queryfield
        }
      }
    })
    .then(otdmulmondrp => {
      res.send(otdmulmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmondrp."
      });
    });
};

exports.update = (req, res) => {
  Otdmulmondrp.findByIdAndUpdate(req.params.otdmulmondrpId, req.body, {
      new: true
    })
    .then(Otdmulmondrp => {
      if (!Otdmulmondrp) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmulmondrpId
        });
      }
      res.send(Otdmulmondrp);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmulmondrpId
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.otdmulmondrpId
      });
    });
};

exports.updateOneServer = (req, res) => {

  var server = req.params.otdmulmondrpserver
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmulmondrp.update({
      "_id": "OtdSuburbiaServidores-" + server
    }, {
      $set: {
        "porcentaje": porcentaje,
        "estado": estado
      }
    }, {
      new: true
    })
    .then(otdmulmondrp => {
      res.send(otdmulmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmondrp."
      });
    });
};

exports.updateOneServerService = (req, res) => {

  var server = req.params.otdmulmondrpserver
  var service = req.params.otdmulmondrpserverservice
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmulmondrp.update({
      "_id": "OtdSuburbiaServidores-" + server
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
    .then(otdmulmondrp => {
      res.send(otdmulmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmondrp."
      });
    });
};

exports.updateOneServerServiceComponent = (req, res) => {

  var server = req.params.otdmulmondrpserver
  var service = req.params.otdmulmondrpserverservice
  var component = req.params.otdmulmondrpserverscomponent
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmulmondrp.update({
      "_id": "OtdSuburbiaServidores-" + server
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
    .then(otdmulmondrp => {
      res.send(otdmulmondrp);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmondrp."
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
  return axios.get('http://localhost:9001/otdmulmondrp')
    .then((response) => {
      console.log(" get http://localhost:9001/otdmulmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}

const updateOtdLMonDrpStatus = (body) => {
  return axios.put('http://localhost:9001/ecommercemulmondrp/OTDMultisitios', body)
    .then((response) => {
      console.log(" put http://localhost:9001/ecommercemulmondrp/OTDMultisitios result: \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}