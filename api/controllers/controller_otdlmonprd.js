const Otdlmonprd = require('../model/otdlmonprd.js');
const axios = require('axios');

exports.findAll = (req, res) => {
  Otdlmonprd.find()
    .then(otdlmonprd => {
      res.send(otdlmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdlmonprd."
      });
    });
};

exports.findOneServer = (req, res) => {
  Otdlmonprd.findById("OtdLiverpoolServidores-" + req.params.otdlmonprdserver)
    .then(otdlmonprd => {
      res.send(otdlmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdlmonprd."
      });
    });
};

exports.findOneServerService = (req, res) => {

  var server = req.params.otdlmonprdserver
  var service = req.params.otdlmonprdserverservice
  var queryfield = "OtdLiverpoolServidores-" + server + "-Servicio-" + service

  Otdlmonprd.find({
      "servicios._id": queryfield
    }, {
      "_id": "0",
      "servicios": {
        "$elemMatch": {
          "_id": queryfield
        }
      }
    })
    .then(otdlmonprd => {
      res.send(otdlmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdlmonprd."
      });
    });
};

exports.update = (req, res) => {
  Otdlmonprd.findByIdAndUpdate(req.params.otdlmonprdId, req.body, {
      new: true
    })
    .then(Otdlmonprd => {
      if (!Otdlmonprd) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdlmonprdId
        });
      }
      res.send(Otdlmonprd);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdlmonprdId
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.otdlmonprdId
      });
    });
};

exports.updateOneServer = (req, res) => {

  var server = req.params.otdlmonprdserver
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdlmonprd.update({
      "_id": "OtdLiverpoolServidores-" + server
    }, {
      $set: {
        "porcentaje": porcentaje,
        "estado": estado
      }
    }, {
      new: true
    })
    .then(otdlmonprd => {
      res.send(otdlmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdlmonprd."
      });
    });
};

exports.updateOneServerService = (req, res) => {

  var server = req.params.otdlmonprdserver
  var service = req.params.otdlmonprdserverservice
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdlmonprd.update({
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
    .then(otdlmonprd => {
      res.send(otdlmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdlmonprd."
      });
    });
};

exports.updateOneServerServiceComponent = (req, res) => {

  var server = req.params.otdlmonprdserver
  var service = req.params.otdlmonprdserverservice
  var component = req.params.otdlmonprdserverscomponent
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdlmonprd.update({
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
    .then(otdlmonprd => {
      res.send(otdlmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdlmonprd."
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
    inconsistente == 0 ? percentage = 100 : percentage = (consistente / inconsistente) * 100;



    req.body.nombre = response.nombre;
    req.body.consistente = consistente;
    req.body.inconsistente = inconsistente
    req.body.percentage = percentage.toString();
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
  return axios.get('http://localhost:9001/otdlmonprd')
    .then((response) => {
      console.log(" get http://localhost:9001/otdlmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}

const updateOtdLMonPrdStatus = (body) => {
  return axios.put('http://localhost:9001/otdlmonprd/OtdLiverpool', body)
    .then((response) => {
      console.log(" put http://localhost:9001/otdlmonprd/OtdLiverpool result: \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}