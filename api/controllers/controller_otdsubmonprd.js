const Otdsubmonprd = require('../model/otdsubmonprd.js');
const axios = require('axios');

exports.findAll = (req, res) => {
  Otdsubmonprd.find()
    .then(otdsubmonprd => {
      res.send(otdsubmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmonprd."
      });
    });
};

exports.findOneServer = (req, res) => {
  Otdsubmonprd.findById("OtdSuburbiaServidores-" + req.params.otdsubmonprdserver)
    .then(otdsubmonprd => {
      res.send(otdsubmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmonprd."
      });
    });
};

exports.findOneServerService = (req, res) => {

  var server = req.params.otdsubmonprdserver
  var service = req.params.otdsubmonprdserverservice
  var queryfield = "OtdSuburbiaServidores-" + server + "-Servicio-" + service

  Otdsubmonprd.find({
      "servicios._id": queryfield
    }, {
      "_id": "0",
      "servicios": {
        "$elemMatch": {
          "_id": queryfield
        }
      }
    })
    .then(otdsubmonprd => {
      res.send(otdsubmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmonprd."
      });
    });
};

exports.update = (req, res) => {
  Otdsubmonprd.findByIdAndUpdate(req.params.otdsubmonprdId, req.body, {
      new: true
    })
    .then(Otdsubmonprd => {
      if (!Otdsubmonprd) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdsubmonprdId
        });
      }
      res.send(Otdsubmonprd);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Note not found with id " + req.params.otdsubmonprdId
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.otdsubmonprdId
      });
    });
};

exports.updateOneServer = (req, res) => {

  var server = req.params.otdsubmonprdserver
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdsubmonprd.update({
      "_id": "OtdSuburbiaServidores-" + server
    }, {
      $set: {
        "porcentaje": porcentaje,
        "estado": estado
      }
    }, {
      new: true
    })
    .then(otdsubmonprd => {
      res.send(otdsubmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmonprd."
      });
    });
};

exports.updateOneServerService = (req, res) => {

  var server = req.params.otdsubmonprdserver
  var service = req.params.otdsubmonprdserverservice
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdsubmonprd.update({
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
    .then(otdsubmonprd => {
      res.send(otdsubmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmonprd."
      });
    });
};

exports.updateOneServerServiceComponent = (req, res) => {

  var server = req.params.otdsubmonprdserver
  var service = req.params.otdsubmonprdserverservice
  var component = req.params.otdsubmonprdserverscomponent
  var porcentaje = req.body.porcentaje
  var estado = req.body.estado

  Otdsubmonprd.update({
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
    .then(otdsubmonprd => {
      res.send(otdsubmonprd);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error recuperando otdsubmonprd."
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
  return axios.get('http://localhost:9001/otdsubmonprd')
    .then((response) => {
      console.log(" get http://localhost:9001/otdsubmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}

const updateOtdLMonPrdStatus = (body) => {
  return axios.put('http://localhost:9001/ecommercesubmonprd/OTDSuburbia', body)
    .then((response) => {
      console.log(" put http://localhost:9001/ecommercesubmonprd/OTDSuburbia result: \n" + JSON.stringify(response.data, undefined, 2));
      return response.data;
    })
    .catch(e => {
      console.log(e)
      return e.message
    })
}