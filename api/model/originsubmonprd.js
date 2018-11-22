var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var originsubmonprdSchema = new Schema(
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
        percentage: {
            type: 'Number'
        },
        estadoDestalle: {
            type: 'Mixed'
        }
    }

);

module.exports = mongoose.model('Originsubmonprd', originsubmonprdSchema, 'originsubmonprd');


