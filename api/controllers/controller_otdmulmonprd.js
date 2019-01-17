const Otdmulmonprd = require('../model/otdmulmonprd.js');
const axios = require('axios');

exports.findAll = (req, res) => {
  Otdmulmonprd.find()
    .then(otdmulmonprd => {
      res.send(otdmulmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmonprd."
      });
    });
};

exports.findOneServer = (req, res) => {
  Otdmulmonprd.findById("OtdMultisitiosServidores-" + req.params.otdmulmonprdserver)
    .then(otdmulmonprd => {
      res.send(otdmulmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmonprd."
      });
    });
};

exports.findOneServerService = (req, res) => {

  var server = req.params.otdmulmonprdserver
  var service = req.params.otdmulmonprdserverservice
  var queryfield = "OtdMultisitiosServidores-" + server + "-Servicio-" + service

  Otdmulmonprd.find({
      "servicios._id": queryfield
    }, {
      "_id": "0",
      "servicios": {
        "$elemMatch": {
          "_id": queryfield
        }
      }
    })
    .then(otdmulmonprd => {
      res.send(otdmulmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmonprd."
      });
    });
};

exports.update = (req, res) => {
  Otdmulmonprd.findByIdAndUpdate(req.params.otdmulmonprdId, req.body, {
      new: true
    })
    .then(Otdmulmonprd => {
      if (!Otdmulmonprd) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmulmonprdId
        });
      }
      res.send(Otdmulmonprd);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmulmonprdId
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.otdmulmonprdId
      });
    });
};

exports.updateOneServer = (req, res) => {

  var server = req.params.otdmulmonprdserver
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmulmonprd.update({
      "_id": "OtdMultisitiosServidores-" + server
    }, {
      $set: {
        "porcentaje": porcentaje,
        "estado": estado
      }
    }, {
      new: true
    })
    .then(otdmulmonprd => {
      res.send(otdmulmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmonprd."
      });
    });
};

exports.updateOneServerService = (req, res) => {

  var server = req.params.otdmulmonprdserver
  var service = req.params.otdmulmonprdserverservice
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmulmonprd.update({
      "_id": "OtdMultisitiosServidores-" + server
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
    .then(otdmulmonprd => {
      res.send(otdmulmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmonprd."
      });
    });
};

exports.updateOneServerServiceComponent = (req, res) => {

  var server = req.params.otdmulmonprdserver
  var service = req.params.otdmulmonprdserverservice
  var component = req.params.otdmulmonprdserverscomponent
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmulmonprd.update({
      "_id": "OtdMultisitiosServidores-" + server
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
    .then(otdmulmonprd => {
      res.send(otdmulmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmulmonprd."
      });
    });
};

exports.updateParents = (req, res) => {

  getOtdLMonPrdStatus().then((response) => {

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

    updateOtdLMonPrdStatus(req.body).then((response) => {

      return res.send(response);

    }).catch(e => {
      return res.send({
        message: "Error updating OtdMonPrdStatus status " + e
      });
    });
    /*----------------------------------------------------------------------*/

  }).catch(e => {
    return res.send({
      message: "Error getting otd " + e
    });
  })
};

const getOtdLMonPrdStatus = () => {
  return axios.get('http://localhost:9001/otdmulmonprd')
    .then((response) => {
      console.log(" get http://localhost:9001/otdmulmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}

const updateOtdLMonPrdStatus = (body) => {
  return axios.put('http://localhost:9001/ecommercemulmonprd/OTDMultisitios', body)
    .then((response) => {
      console.log(" put http://localhost:9001/ecommercemulmonprd/OTDMultisitios result: \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}