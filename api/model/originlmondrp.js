var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var originlmondrpSchema = new Schema(
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
        origins: {
            type: 'Mixed'
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

module.exports = mongoose.model('Originlmondrp', originlmondrpSchema, 'originlmondrp');


