
const
    Weblogicserversmulmondrp = require('../model/weblogicserversmesmondrp.js');

const axios =require('axios'); 


exports.findAll = (req, res) => {
    Weblogicserversmulmondrp.find()
        .then(weblogicserversmulmondrp => {
            res.send(weblogicserversmulmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicserversmesmondrp."
            });
        });
};

// Update
exports.updateParents = (req, res) => {
    
    getWebLogicServerMulMonDrpStatus().then((response) => 
    {
        
        const serverStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )
        
        running = parseInt(serverStatusTotals["RUNNING"]);
        noRunning =  response.length - running;
        percentage = (running / noRunning) * 100;

        req.body.nombre = "Servers";
        req.body.running = running;
        req.body.noRunning = noRunning
        req.body.percentage = percentage.toString(); 
        req.body.estado = (percentage == 100 ? "consistente" : "inconsistente");
        req.body.estadoDestalle = serverStatusTotals;

        updateWebLogicServerMulMonDrpStatus(req.body).then((response) =>
        {
            req.body.nombre = "Weblogic";
            return res.send(response);

        }).catch( e => {
            
            return res.send({
                message: "Error updating WebLogicServerMesMonDrpStatus" + e
            });

        });

    }).catch(e => {
        
        return res.send({
            message: "Error getting weblogic servers " + e
        });

    })

};

const getWebLogicServerMulMonDrpStatus = () =>
{
    return axios.get('http://localhost:9001/weblogicserversmesmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogicserversmesmondrp result : \n" + JSON.stringify(response.data, undefined,2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 

const updateWebLogicServerMulMonDrpStatus = (body) => 
{
    return axios.put('http://localhost:9001/weblogicmesmondrp/Servers', body )
        .then((response) => {
            console.log(" put http://localhost:9001/weblogicmesmondrp/Servers result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
