
const
    Weblogiclmondrp = require('../model/weblogiclmondrp.js');

const axios = require('axios'); 


exports.findAll = (req, res) => {
    Weblogiclmondrp.find()
        .then(weblogiclmondrp => {
            res.send(weblogiclmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogiclmondrp."
            });
        });
};

exports.updateParents = (req, res) => {

    getWebLogicLMonDrpStatus().then((response) =>
    {

        const weblogicStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        consistente = parseInt(weblogicStatusTotals["consistente"] ) ;
        consistente = (isNaN(consistente) ? 0 : consistente)
        inconsistente = response.length - consistente;
        percentage = (consistente / inconsistente) * 100;


        req.body.nombre = "WebLogic";
        req.body.consistente = consistente;
        req.body.inconsistente = inconsistente
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "incosistente");
        req.body.estadoDestalle = weblogicStatusTotals;


        /*----------------------------------------------------------------------*/
        
        updateeCommerceLMonDrpStatus(req.body).then((response) => {
          
            return res.send(response);
                   
        }).catch(e => {
            return res.send({
                message: "Error updating WeblogicLMonDrpStatus status " + e
            });
        }); 
        /*----------------------------------------------------------------------*/

    }).catch (e => {
      return res.send({
         message: "Error getting weblogic " + e
      });
    })
   
};

const getWebLogicLMonDrpStatus = () => {
    return axios.get('http://localhost:9001/weblogiclmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogiclmondrp result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 

const updateeCommerceLMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/ecommercelmondrp/WebLogic', body)
        .then((response) => {
            console.log(" put http://localhost:9001/ecommercelmondrp/WebLogic result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
