
const
    Weblogicserverslmonprd = require('../model/weblogicserverslmonprd.js');

const axios = require('axios'); 

exports.findAll = (req, res) => {
    Weblogicserverslmonprd.find()
        .then(weblogicserverslmonprd => {
            res.send(weblogicserverslmonprd);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando weblogicserverslmonprd."
            });
        });
};
// Update
exports.updateParents = (req, res) => {

    getWebLogicServerLMonPrdStatus().then((response) => {

        const serverStatusTotals = response.reduce(
            (totals, p) => ({ ...totals, [p.estado]: (totals[p.estado] || 0) + 1 }),
            {}
        )

        running = parseInt(serverStatusTotals["RUNNING"]);
        noRunning = response.length - running;
        percentage = (running / noRunning) * 100;

        req.body.nombre = "Servers";
        req.body.running = running;
        req.body.noRunning = noRunning
        req.body.percentage = percentage.toString();
        req.body.estado = (percentage == 100 ? "consistente" : "incosistente");
        req.body.estadoDestalle = serverStatusTotals;

        updateWebLogicServerLMonPrdStatus(req.body).then((response) => {
            req.body.nombre = "Weblogic";
            return res.send(response);

        }).catch(e => {

            return res.send({
                message: "Error updating WebLogicServerLMonPrdStatus" + e
            });

        });

    }).catch(e => {

        return res.send({
            message: "Error getting weblogic servers " + e
        });

    })

};

const getWebLogicServerLMonPrdStatus = () => {
    return axios.get('http://localhost:9001/weblogicserverslmonprd')
        .then((response) => {
            console.log(" get http://localhost:9001/weblogicserverslmonprd result : \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
}

const updateWebLogicServerLMonPrdStatus = (body) => {
    return axios.put('http://localhost:9001/weblogiclmonprd/Servers', body)
        .then((response) => {
            console.log(" put http://localhost:9001/weblogiclmonprd/Servers result: \n" + JSON.stringify(response.data, undefined, 2));
            return response.data;
        })
        .catch(e => {
            console.log(e)
            return e.message
        })
} 
