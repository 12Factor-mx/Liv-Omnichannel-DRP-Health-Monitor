module.exports = (app) => {

    /***
     * ---------------------------------------------------
     * Endeca Liverpool DRP
     * ---------------------------------------------------
     *  */   
    {                                           
        const endecalmondrp = require('../controllers/controller_endecalmondrp.js');
        // get all 
        app.get( '/endecalmondrp', endecalmondrp.findAll);
        // get, and update one endeca server
        app.get('/endecalmondrp/:endecalmondrpserver', endecalmondrp.findOneServer);
        app.post('/endecalmondrp/:endecalmondrpserver', endecalmondrp.updateOneServer);
        // get, and update one endeca server/service
        app.get('/endecalmondrp/:endecalmondrpserver/:endecalmondrpserverservice', endecalmondrp.findOneServerService);
        app.post('/endecalmondrp/:endecalmondrpserver/:endecalmondrpserverservice', endecalmondrp.updateOneServerService);
        // update one  endeca server/service/component
        app.post('/endecalmondrp/:endecalmondrpserver/:endecalmondrpserverservice/:endecalmondrpserverscomponent', endecalmondrp.updateOneServerServiceComponent);   
        // misc
        app.post('/endecalmondrp/updateparents', endecalmondrp.updateParents)
        app.put('/endecalmondrp/:endecalmondrpId', endecalmondrp.update);
    }

    /***
     * ----------------------------------------------------
     * Endeca Liverpool PRD
     * ----------------------------------------------------
     *  */
    {
        const endecalmonprd = require('../controllers/controller_endecalmonprd.js');
        // get all 
        app.get('/endecalmonprd', endecalmonprd.findAll);
        // get, and update one endeca server
        app.get('/endecalmonprd/:endecalmonprdserver', endecalmonprd.findOneServer);
        app.post('/endecalmonprd/:endecalmonprdserver', endecalmonprd.updateOneServer);
        // get, and update one endeca server/service
        app.get('/endecalmonprd/:endecalmonprdserver/:endecalmonprdserverservice', endecalmonprd.findOneServerService);
        app.post('/endecalmonprd/:endecalmonprdserver/:endecalmonprdserverservice', endecalmonprd.updateOneServerService);
        // update one  endeca server/service/component
        app.post('/endecalmonprd/:endecalmonprdserver/:endecalmonprdserverservice/:endecalmonprdserverscomponent', endecalmonprd.updateOneServerServiceComponent);
        // misc
        app.post('/endecalmonprd/updateparents', endecalmonprd.updateParents)
        app.put('/endecalmonprd/:endecalmonprdId', endecalmonprd.update);
    }


    const endecamulmondrp = require('../controllers/controller_endecamulmondrp.js');
    app.get( '/endecamulmondrp', endecamulmondrp.findAll);
    app.get('/endecamulmondrp/:endecamulmondrpserver', endecamulmondrp.findOneServer);
    app.get('/endecamulmondrp/:endecamulmondrpserver/:endecamulmondrpserverservice', endecamulmondrp.findOneServerService);
    app.post('/endecamulmondrp/:endecamulmondrpserver', endecamulmondrp.updateOneServer);
    app.post('/endecamulmondrp/:endecamulmondrpserver/:endecamulmondrpserverservice', endecamulmondrp.updateOneServerService);
    app.post('/endecamulmondrp/:endecamulmondrpserver/:endecamulmondrpserverservice/:endecamulmondrpserverscomponent', endecamulmondrp.updateOneServerServiceComponent);
    app.post('/endecamulmondrp/updateparents', endecamulmondrp.updateParents)
    app.put('/endecamulmondrp/:endecamulmondrpId', endecamulmondrp.update);

    const endecamulmonprd = require('../controllers/controller_endecamulmonprd.js');
    app.get('/endecamulmonprd', endecamulmonprd.findAll);    
    app.get('/endecamulmonprd/:endecamulmonprdserver', endecamulmonprd.findOneServer);
    app.get('/endecamulmonprd/:endecamulmonprdserver/:endecamulmonprdserverservice', endecamulmonprd.findOneServerService);
    app.post('/endecamulmonprd/:endecamulmonprdserver', endecamulmonprd.updateOneServer);
    app.post('/endecamulmonprd/:endecamulmonprdserver/:endecamulmonprdserverservice', endecamulmonprd.updateOneServerService);
    app.post('/endecamulmonprd/:endecamulmonprdserver/:endecamulmonprdserverservice/:endecamulmonprdserverscomponent', endecamulmonprd.updateOneServerServiceComponent);
    app.post('/endecamulmonprd/updateparents', endecamulmonprd.updateParents)
    app.put('/endecamulmonprd/:endecamulmonprdId', endecamulmonprd.update);


    const endecasubmondrp = require('../controllers/controller_endecasubmondrp.js');
    app.get( '/endecasubmondrp', endecasubmondrp.findAll);
    app.get('/endecasubmondrp/:endecasubmondrpserver', endecasubmondrp.findOneServer);
    app.get('/endecasubmondrp/:endecasubmondrpserver/:endecasubmondrpserverservice', endecasubmondrp.findOneServerService);
    app.post('/endecasubmondrp/:endecasubmondrpserver', endecasubmondrp.updateOneServer);
    app.post('/endecasubmondrp/:endecasubmondrpserver/:endecasubmondrpserverservice', endecasubmondrp.updateOneServerService);
    app.post('/endecasubmondrp/:endecasubmondrpserver/:endecasubmondrpserverservice/:endecasubmondrpserverscomponent', endecasubmondrp.updateOneServerServiceComponent);
    app.post('/endecasubmondrp/updateparents', endecasubmondrp.updateParents);
    app.put('/endecasubmondrp/:endecasubmondrpId', endecasubmondrp.update);

    const endecasubmonprd = require('../controllers/controller_endecasubmonprd.js');
    app.get('/endecasubmonprd', endecasubmonprd.findAll);
    app.get('/endecasubmonprd/:endecasubmonprdserver', endecasubmonprd.findOneServer);
    app.get('/endecasubmonprd/:endecasubmonprdserver/:endecasubmonprdserverservice', endecasubmonprd.findOneServerService);
    app.post('/endecasubmonprd/:endecasubmonprdserver', endecasubmonprd.updateOneServer);
    app.post('/endecasubmonprd/:endecasubmonprdserver/:endecasubmonprdserverservice', endecasubmonprd.updateOneServerService);
    app.post('/endecasubmonprd/:endecasubmonprdserver/:endecasubmonprdserverservice/:endecasubmonprdserverscomponent', endecasubmonprd.updateOneServerServiceComponent);
    app.post('/endecasubmonprd/updateparents', endecasubmonprd.updateParents);
    app.put('/endecasubmonprd/:endecasubmonprdId', endecasubmonprd.update);
 

    const endecamesmondrp = require('../controllers/controller_endecamesmondrp.js');
    app.get( '/endecamesmondrp', endecamesmondrp.findAll);
    app.get('/endecamesmondrp/:endecamesmondrpserver', endecamesmondrp.findOneServer);
    app.get('/endecamesmondrp/:endecamesmondrpserver/:endecamesmondrpserverservice', endecamesmondrp.findOneServerService);
    app.post('/endecamesmondrp/:endecamesmondrpserver', endecamesmondrp.updateOneServer);
    app.post('/endecamesmondrp/:endecamesmondrpserver/:endecamesmondrpserverservice', endecamesmondrp.updateOneServerService);
    app.post('/endecamesmondrp/:endecamesmondrpserver/:endecamesmondrpserverservice/:endecamesmondrpserverscomponent', endecamesmondrp.updateOneServerServiceComponent);
    app.put('/endecamesmondrp/updateparents', endecamesmondrp.updateParents)
    app.put('/endecamesmondrp/:endecamesmondrpId', endecamesmondrp.update);

    const endecamesmonprd = require('../controllers/controller_endecamesmonprd.js');
    app.get('/endecamesmonprd', endecamesmonprd.findAll);
    app.get('/endecamesmonprd/:endecamesmonprdserver', endecamesmonprd.findOneServer);
    app.get('/endecamesmonprd/:endecamesmonprdserver/:endecamesmonprdserverservice', endecamesmonprd.findOneServerService);
    app.post('/endecamesmonprd/:endecamesmonprdserver', endecamesmonprd.updateOneServer);
    app.post('/endecamesmonprd/:endecamesmonprdserver/:endecamesmonprdserverservice', endecamesmonprd.updateOneServerService);
    app.post('/endecamesmonprd/:endecamesmonprdserver/:endecamesmonprdserverservice/:endecamesmonprdserverscomponent', endecamesmonprd.updateOneServerServiceComponent);
    app.put('/endecamesmonprd/updateparents', endecamesmonprd.updateParents)
    app.put('/endecamesmonprd/:endecamesmonprdId', endecamesmonprd.update);
 
}