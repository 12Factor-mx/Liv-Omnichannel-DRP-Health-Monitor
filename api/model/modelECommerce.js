var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eCommerceSchema = new Schema
({
    _id: { type: 'String' },
    nombre: { type: 'String' },
    estado: { type: 'String' },
    fecha: { type: 'Date' },
    consistente: { type: 'Number' },
    inconsistente: { type: 'Number' },
    percentage: { type: 'Number' },
    estadoDestalle: { type: 'Mixed' }
});

module.exports = mongoose.model('eCommerce', 
eCommerceSchema, 'ecommercemesmondrp');