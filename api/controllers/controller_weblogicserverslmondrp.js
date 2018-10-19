
const
    Weblogicserverslmondrp = require('../model/weblogicserverslmondrp.js');

const axios =require('axios'); 


exports.findAll = (req, res) => {
    Weblogicserverslmondrp.find()
        .then(weblogicserverslmondrp => {
            res.send(weblogicserverslmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicserverslmondrp."
            });
        });
};

// Update
exports.updateParents = (req, res) => {
    
    getWebLogicServerLMonDrpStatus().then((response) => 
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
        req.body.estado = (percentage == 100 ? "consistente" : "incosistente");
        req.body.estadoDestalle = serverStatusTotals;

        updateWebLogicServerLMonDrpStatus(req.body).then((response) =>
        {
            req.body.nombre = "Weblogic";
            return res.send(response);

            /*
            req.updateWebLogicServerLMonDrpStatus = response

            updateeCommerceLMonDrpStatus(req.body).then((response) => {

                req.body.nombre = "eCommerceLiverpool";
                req.updateWebLogicLMonDrpStatus = response

                updateRootMonDrpStatus(req.body).then((response) => {
    
                    response.
                        updateWebLogicLMonDrpStatus = req.updateWebLogicLMonDrpStatus

                    response.
                        updateWebLogicLMonDrpStatus.
                            updateWebLogicServerLMonDrpStatus = req.updateWebLogicServerLMonDrpStatus
                  
                   return res.send(response);

                }).catch(e => {
                    return res.send({
                        message: "Error updating updateRootMonDrpStatusstatus " + e
                    });
                });   
                 
            }).catch(e => {
                return res.send({
                    message: "Error updating eCommerceLMonDrpStatus status " + e
                });
            }); 
            */
            
        }).catch( e => {
            return res.send({
                message: "Error updating WebLogicServerLMonDrpStatus" + e
            });
        });

    }).catch(e => {
        return res.send({
            message: "Error getting weblogic servers " + e
        });
    })

};

const getWebLogicServerLMonDrpStatus = () =>
{
    return axios.get('http://localhost:9001/weblogicserverslmondrp')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogicserverslmondrp result : \n" + JSON.stringify(response.data, undefined,2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 

const updateWebLogicServerLMonDrpStatus = (body) => 
{
    return axios.put('http://localhost:9001/weblogiclmondrp/Servers', body )
        .then((response) => {
            console.log(" put http://localhost:9001/weblogiclmondrp/Servers result: \n" + JSON.stringify(response.data, undefined, 2));
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

const updateRootMonDrpStatus = (body) => {
    return axios.put('http://localhost:9001/rootmondrp/eCommerceLiverpool', body)
        .then((response) => {
            console.log(" put http://localhost:9001/rootmondrp/eCommerceLiverpool result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 









