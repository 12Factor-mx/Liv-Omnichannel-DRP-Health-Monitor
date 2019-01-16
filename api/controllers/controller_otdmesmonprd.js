const Otdmesmonprd = require('../model/otdmesmonprd.js');
const axios = require('axios');

exports.findAll = (req, res) => {
  Otdmesmonprd.find()
    .then(otdmesmonprd => {
      res.send(otdmesmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmonprd."
      });
    });
};

exports.findOneServer = (req, res) => {
  Otdmesmonprd.findById("OtdMesaServidores-" + req.params.otdmesmonprdserver)
    .then(otdmesmonprd => {
      res.send(otdmesmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmonprd."
      });
    });
};

exports.findOneServerService = (req, res) => {

  var server = req.params.otdmesmonprdserver
  var service = req.params.otdmesmonprdserverservice
  var queryfield = "OtdMesaServidores-" + server + "-Servicio-" + service

  Otdmesmonprd.find({
      "servicios._id": queryfield
    }, {
      "_id": "0",
      "servicios": {
        "$elemMatch": {
          "_id": queryfield
        }
      }
    })
    .then(otdmesmonprd => {
      res.send(otdmesmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmonprd."
      });
    });
};

exports.update = (req, res) => {
  Otdmesmonprd.findByIdAndUpdate(req.params.otdmesmonprdId, req.body, {
      new: true
    })
    .then(Otdmesmonprd => {
      if (!Otdmesmonprd) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmesmonprdId
        });
      }
      res.send(Otdmesmonprd);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdmesmonprdId
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.otdmesmonprdId
      });
    });
};

exports.updateOneServer = (req, res) => {

  var server = req.params.otdmesmonprdserver
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmesmonprd.update({
      "_id": "OtdMesaServidores-" + server
    }, {
      $set: {
        "porcentaje": porcentaje,
        "estado": estado
      }
    }, {
      new: true
    })
    .then(otdmesmonprd => {
      res.send(otdmesmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmonprd."
      });
    });
};

exports.updateOneServerService = (req, res) => {

  var server = req.params.otdmesmonprdserver
  var service = req.params.otdmesmonprdserverservice
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmesmonprd.update({
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
    .then(otdmesmonprd => {
      res.send(otdmesmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmonprd."
      });
    });
};

exports.updateOneServerServiceComponent = (req, res) => {

  var server = req.params.otdmesmonprdserver
  var service = req.params.otdmesmonprdserverservice
  var component = req.params.otdmesmonprdserverscomponent
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdmesmonprd.update({
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
    .then(otdmesmonprd => {
      res.send(otdmesmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdmesmonprd."
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
  return axios.get('http://localhost:9001/otdmesmonprd')
    .then((response) => {
      console.log(" get http://localhost:9001/otdmesmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}

const updateOtdLMonPrdStatus = (body) => {
  return axios.put('http://localhost:9001/ecommercemesmonprd/OTDMesa', body)
    .then((response) => {
      console.log(" put http://localhost:9001/ecommercemesmonprd/OTDMesa result: \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}