var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var endecamulmondrpSchema = new Schema(
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
        },
        espejo: {
            type: 'String'
        },

    }

);

module.exports = mongoose.model('Endecamesmondrp', endecamulmondrpSchema, 'endecamesmondrp');