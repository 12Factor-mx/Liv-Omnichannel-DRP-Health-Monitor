module.exports = (app) => {

                                                  
    const endecalmondrp = require('../controllers/controller_endecalmondrp.js');
    app.get( '/endecalmondrp', endecalmondrp.findAll);
    app.get('/endecalmondrp/:endecalmondrpserver', endecalmondrp.findOneServer);
    app.get('/endecalmondrp/:endecalmondrpserver/:endecalmondrpserverservice', endecalmondrp.findOneServerService);
    app.post('/endecalmondrp/:endecalmondrpserver/:endecalmondrpserverservice/:endecalmondrpserverscomponent', endecalmondrp.updateOneServerService);
    app.post('/endecalmondrp/updateparents', endecalmondrp.updateParents)
    app.put('/endecalmondrp/:endecalmondrpId', endecalmondrp.update);

    const endecalmonprd = require('../controllers/controller_endecalmonprd.js');
    app.get('/endecalmonprd', endecalmonprd.findAll);
    app.get('/endecalmonprd/:endecalmonprdserver', endecalmonprd.findOneServer);
    app.get('/endecalmonprd/:endecalmonprdserver/:endecalmonprdserverservice', endecalmonprd.findOneServerService);
    app.post('/endecalmonprd/updateparents', endecalmonprd.updateParents)
    app.post('/endecalmonprd/:endecalmonprdserver/:endecalmonprdserverservice/:endecalmonprdserverscomponent', endecalmonprd.updateOneServerService);
    app.put('/endecalmonprd/:endecalmonprdId', endecalmonprd.update);

    const endecamulmondrp = require('../controllers/controller_endecamulmondrp.js');
    app.get( '/endecamulmondrp', endecamulmondrp.findAll);
    app.get('/endecamulmondrp/:endecamulmondrpserver', endecamulmondrp.findOneServer);
    app.get('/endecamulmondrp/:endecamulmondrpserver/:endecamulmondrpserverservice', endecamulmondrp.findOneServerService);
    app.post('/endecamulmondrp/updateparents', endecamulmondrp.updateParents)
    app.put('/endecamulmondrp/:endecamulmondrpId', endecamulmondrp.update);

    const endecamulmonprd = require('../controllers/controller_endecamulmonprd.js');
    app.get('/endecamulmonprd', endecamulmonprd.findAll);
    app.get('/endecamulmonprd/:endecamulmonprdserver', endecamulmonprd.findOneServer);
    app.get('/endecamulmonprd/:endecamulmonprdserver/:endecamulmonprdserverservice', endecamulmonprd.findOneServerService);
    app.post('/endecamulmonprd/updateparents', endecamulmonprd.updateParents)
    app.put('/endecamulmonprd/:endecamulmonprdId', endecamulmonprd.update);


    const endecasubmondrp = require('../controllers/controller_endecasubmondrp.js');
    app.get( '/endecasubmondrp', endecasubmondrp.findAll);
    app.get('/endecasubmondrp/:endecasubmondrpserver', endecasubmondrp.findOneServer);
    app.get('/endecasubmondrp/:endecasubmondrpserver/:endecasubmondrpserverservice', endecasubmondrp.findOneServerService);
    app.post('/endecasubmondrp/updateparents', endecasubmondrp.updateParents);
    app.put('/endecasubmondrp/:endecasubmondrpId', endecasubmondrp.update);

    const endecasubmonprd = require('../controllers/controller_endecasubmonprd.js');
    app.get('/endecasubmonprd', endecasubmonprd.findAll);
    app.get('/endecasubmonprd/:endecasubmonprdserver', endecasubmonprd.findOneServer);
    app.get('/endecasubmonprd/:endecasubmonprdserver/:endecasubmonprdserverservice', endecasubmonprd.findOneServerService);
    app.post('/endecasubmonprd/updateparents', endecasubmonprd.updateParents);
    app.put('/endecasubmonprd/:endecasubmonprdId', endecasubmonprd.update);
 

    const endecamesmondrp = require('../controllers/controller_endecamesmondrp.js');
    app.get( '/endecamesmondrp', endecamesmondrp.findAll);
    app.get('/endecamesmondrp/:endecamesmondrpserver', endecamesmondrp.findOneServer);
    app.get('/endecamesmondrp/:endecamesmondrpserver/:endecamesmondrpserverservice', endecamesmondrp.findOneServerService);
    app.post('/endecamesmondrp/updateparents', endecamesmondrp.updateParents)
    app.put('/endecamesmondrp/:endecamesmondrpId', endecamesmondrp.update);

    const endecamesmonprd = require('../controllers/controller_endecamesmonprd.js');
    app.get('/endecamesmonprd', endecamesmonprd.findAll);
    app.get('/endecamesmonprd/:endecamesmonprdserver', endecamesmonprd.findOneServer);
    app.get('/endecamesmonprd/:endecamesmonprdserver/:endecamesmonprdserverservice', endecamesmonprd.findOneServerService);
    app.post('/endecamesmonprd/updateparents', endecamesmonprd.updateParents)
    app.put('/endecamesmonprd/:endecamesmonprdId', endecamesmonprd.update);
 

}