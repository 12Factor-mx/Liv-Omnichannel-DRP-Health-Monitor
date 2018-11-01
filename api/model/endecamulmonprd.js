var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var endecamumulmonprdSchema = new Schema(
    {
        _id: {
            type: 'String'
        },
        nombre: {
            type: 'String'
        },
        servicios: {
            type: 'Mixed'
        },
        estado: {
            type: 'String'
        },
        fecha: {
            type: 'Date'
        },
        consistente: {
            type: 'Number'
        },
        inconsistente: {
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

module.exports = mongoose.model('Endecamumulmonprd', endecamumulmonprdSchema, 'endecamumulmonprd');