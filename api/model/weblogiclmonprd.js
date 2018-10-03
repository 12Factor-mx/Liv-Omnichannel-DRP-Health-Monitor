var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var weblogiclmonprdSchema = new Schema(
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
        status: {
            type: 'String'
        }
    }

);

module.exports = mongoose.model('Weblogiclmonprd', weblogiclmonprdSchema, 'weblogiclmonprd');
