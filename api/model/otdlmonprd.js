var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var otdlmonprdSchema = new Schema(
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
        componentes: {
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

module.exports = mongoose.model('Otdlmonprd', otdlmonprdSchema, 'otdlmonprd');
