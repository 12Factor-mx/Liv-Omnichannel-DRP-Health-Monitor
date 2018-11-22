module.exports = (app) => {
                                              
    const originlmondrp = require('../controllers/controller_originlmondrp.js');
    app.get( '/originlmondrp', originlmondrp.findAll);
    app.put('/originlmondrp/:originlmondrpId/:originlmondrpName', originlmondrp.update);
    app.put('/originlmondrp/upadateroot', originlmondrp.updateRoot);
    app.post('/originlmondrp/updateparents', originlmondrp.updateParents);

    /* app.get('/originlmondrp/:originlmondrpserver', originlmondrp.findOneServer);
    app.get('/originlmondrp/:originlmondrpserver/:originlmondrpserverservice', originlmondrp.findOneServerService);
    app.post('/originlmondrp/:originlmondrpserver/:originlmondrpserverservice/:originlmondrpserverscomponent', originlmondrp.updateOneServerService);*/
   
    const originlmonprd = require('../controllers/controller_originlmonprd.js');
    app.get('/originlmonprd', originlmonprd.findAll);
    app.put('/originlmonprd/:originlmonprdId/:originlmonprdName', originlmonprd.update);
    app.post('/originlmonprd/updateparents', originlmonprd.updateParents);

    //  app.put('/originlmonprd/upadateroot', originlmonprd.updateRoot);
    /* app.get('/originlmonprd/:originlmonprdserver', originlmonprd.findOneServer);
    app.get('/originlmonprd/:originlmonprdserver/:originlmonprdserverservice', originlmonprd.findOneServerService);
    app.post('/originlmonprd/:originlmonprdserver/:originlmonprdserverservice/:originlmonprdserverscomponent', originlmonprd.updateOneServerService);
    */



    
    const originmulmondrp = require('../controllers/controller_originmulmondrp.js');
    app.get( '/originmulmondrp', originmulmondrp.findAll);
    app.put('/originmulmondrp/:originmulmondrpId', originmulmondrp.update);
    app.put('/originmulmondrp/upadateroot', originmulmondrp.updateRoot);
    app.post('/originmulmondrp/updateparents', originmulmondrp.updateParents);

    // app.get('/originmulmondrp/:originmulmondrpserver', originmulmondrp.findOneServer);
    // app.get('/originmulmondrp/:originmulmondrpserver/:originmulmondrpserverservice', originmulmondrp.findOneServerService);

    const originmulmonprd = require('../controllers/controller_originmulmonprd.js');
    app.get('/originmulmonprd', originmulmonprd.findAll);
    app.put('/originmulmonprd/:originmulmonprdId', originmulmonprd.update);
    app.post('/originmulmonprd/updateparents', originmulmonprd.updateParents)

    // app.get('/originmulmonprd/:originmulmonprdserver', originmulmonprd.findOneServer);
    // app.get('/originmulmonprd/:originmulmonprdserver/:originmulmonprdserverservice', originmulmonprd.findOneServerService);




    const originsubmondrp = require('../controllers/controller_originsubmondrp.js');
    app.get( '/originsubmondrp', originsubmondrp.findAll);
    app.put('/originsubmondrp/:originsubmondrpId', originsubmondrp.update);
    app.put('/originsubmondrp/upadateroot', originsubmondrp.updateRoot);
    app.post('/originsubmondrp/updateparents', originsubmondrp.updateParents);
    
    // app.get('/originsubmondrp/:originsubmondrpserver', originsubmondrp.findOneServer);
    // app.get('/originsubmondrp/:originsubmondrpserver/:originsubmondrpserverservice', originsubmondrp.findOneServerService);
    
    const originsubmonprd = require('../controllers/controller_originsubmonprd.js');
    app.get('/originsubmonprd', originsubmonprd.findAll);
    app.put('/originsubmonprd/:originsubmonprdId', originsubmonprd.update);
    app.post('/originsubmonprd/updateparents', originsubmonprd.updateParents);

    // app.get('/originsubmonprd/:originsubmonprdserver', originsubmonprd.findOneServer);
    // app.get('/originsubmonprd/:originsubmonprdserver/:originsubmonprdserverservice', originsubmonprd.findOneServerService);
    
    



    const originmesmondrp = require('../controllers/controller_originmesmondrp.js');
    app.get( '/originmesmondrp', originmesmondrp.findAll);
    app.put('/originmesmondrp/:originmesmondrpId', originmesmondrp.update);
    app.put('/originmesmondrp/upadateroot', originmesmondrp.updateRoot);
    app.post('/originmesmondrp/updateparents', originmesmondrp.updateParents);
    
    // app.get('/originmesmondrp/:originmesmondrpserver', originmesmondrp.findOneServer);
    // app.get('/originmesmondrp/:originmesmondrpserver/:originmesmondrpserverservice', originmesmondrp.findOneServerService);
    
    const originmesmonprd = require('../controllers/controller_originmesmonprd.js');
    app.get('/originmesmonprd', originmesmonprd.findAll);
    app.put('/originmesmonprd/:originmesmonprdId', originmesmonprd.update);
    app.post('/originmesmonprd/updateparents', originmesmonprd.updateParents);
    
    // app.get('/originmesmonprd/:originmesmonprdserver', originmesmonprd.findOneServer);
    // app.get('/originmesmonprd/:originmesmonprdserver/:originmesmonprdserverservice', originmesmonprd.findOneServerService);
    // app.post('/originmesmonprd/updateparents', originmesmonprd.updateParents)

}