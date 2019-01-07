var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var weblogicmulmonprdSchema = new Schema(
    {
        _id: {
            type: 'String'
        },
        nombre: {
            type: 'String'
        },
        estado: {
            type: 'String'
        },
        fecha: {
            type: 'Date'
        },
        running: {
            type: 'Number'
        },
        noRunning: {
            type: 'Number'
        },
        porcentaje: {
            type: 'Number'
        },
        estadoDestalle: {
            type: 'Mixed'
        }
    }

);

module.exports = mongoose.model('Weblogicmulmonprd', weblogicmulmonprdSchema, 'weblogicmulmonprd');
