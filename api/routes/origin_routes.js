module.exports = (app) => {

                                                  
    const originlmondrp = require('../controllers/controller_originlmondrp.js');
    app.get( '/originlmondrp', originlmondrp.findAll);
    app.put('/originlmondrp/:originlmondrpId/:originlmondrpName', originlmondrp.update);
    app.put('/originlmondrp/upadateroot', originlmondrp.updateRoot);
    app.post('/originlmondrp/updateparents', originlmondrp.updateParents)
    /* app.get('/originlmondrp/:originlmondrpserver', originlmondrp.findOneServer);
    app.get('/originlmondrp/:originlmondrpserver/:originlmondrpserverservice', originlmondrp.findOneServerService);
    app.post('/originlmondrp/:originlmondrpserver/:originlmondrpserverservice/:originlmondrpserverscomponent', originlmondrp.updateOneServerService);*/
   
     


    const originlmonprd = require('../controllers/controller_originlmonprd.js');
    app.get('/originlmonprd', originlmonprd.findAll);
    app.put('/originlmonprd/:originlmonprdId/:originlmonprdName', originlmonprd.update);
  //  app.put('/originlmonprd/upadateroot', originlmonprd.updateRoot);
    app.post('/originlmonprd/updateparents', originlmonprd.updateParents)
    /* app.get('/originlmonprd/:originlmonprdserver', originlmonprd.findOneServer);
    app.get('/originlmonprd/:originlmonprdserver/:originlmonprdserverservice', originlmonprd.findOneServerService);
    app.post('/originlmonprd/:originlmonprdserver/:originlmonprdserverservice/:originlmonprdserverscomponent', originlmonprd.updateOneServerService);
    */

    /*
    const originmulmondrp = require('../controllers/controller_originmulmondrp.js');
    app.get( '/originmulmondrp', originmulmondrp.findAll);
    app.get('/originmulmondrp/:originmulmondrpserver', originmulmondrp.findOneServer);
    app.get('/originmulmondrp/:originmulmondrpserver/:originmulmondrpserverservice', originmulmondrp.findOneServerService);
    app.post('/originmulmondrp/updateparents', originmulmondrp.updateParents)
    app.put('/originmulmondrp/:originmulmondrpId', originmulmondrp.update);

    const originmulmonprd = require('../controllers/controller_originmulmonprd.js');
    app.get('/originmulmonprd', originmulmonprd.findAll);
    app.get('/originmulmonprd/:originmulmonprdserver', originmulmonprd.findOneServer);
    app.get('/originmulmonprd/:originmulmonprdserver/:originmulmonprdserverservice', originmulmonprd.findOneServerService);
    app.post('/originmulmonprd/updateparents', originmulmonprd.updateParents)
    app.put('/originmulmonprd/:originmulmonprdId', originmulmonprd.update);


    const originsubmondrp = require('../controllers/controller_originsubmondrp.js');
    app.get( '/originsubmondrp', originsubmondrp.findAll);
    app.get('/originsubmondrp/:originsubmondrpserver', originsubmondrp.findOneServer);
    app.get('/originsubmondrp/:originsubmondrpserver/:originsubmondrpserverservice', originsubmondrp.findOneServerService);
    app.post('/originsubmondrp/updateparents', originsubmondrp.updateParents);
    app.put('/originsubmondrp/:originsubmondrpId', originsubmondrp.update);

    const originsubmonprd = require('../controllers/controller_originsubmonprd.js');
    app.get('/originsubmonprd', originsubmonprd.findAll);
    app.get('/originsubmonprd/:originsubmonprdserver', originsubmonprd.findOneServer);
    app.get('/originsubmonprd/:originsubmonprdserver/:originsubmonprdserverservice', originsubmonprd.findOneServerService);
    app.post('/originsubmonprd/updateparents', originsubmonprd.updateParents);
    app.put('/originsubmonprd/:originsubmonprdId', originsubmonprd.update);
 

    const originmesmondrp = require('../controllers/controller_originmesmondrp.js');
    app.get( '/originmesmondrp', originmesmondrp.findAll);
    app.get('/originmesmondrp/:originmesmondrpserver', originmesmondrp.findOneServer);
    app.get('/originmesmondrp/:originmesmondrpserver/:originmesmondrpserverservice', originmesmondrp.findOneServerService);
    app.post('/originmesmondrp/updateparents', originmesmondrp.updateParents)
    app.put('/originmesmondrp/:originmesmondrpId', originmesmondrp.update);

    const originmesmonprd = require('../controllers/controller_originmesmonprd.js');
    app.get('/originmesmonprd', originmesmonprd.findAll);
    app.get('/originmesmonprd/:originmesmonprdserver', originmesmonprd.findOneServer);
    app.get('/originmesmonprd/:originmesmonprdserver/:originmesmonprdserverservice', originmesmonprd.findOneServerService);
    app.post('/originmesmonprd/updateparents', originmesmonprd.updateParents)
    app.put('/originmesmonprd/:originmesmonprdId', originmesmonprd.update);
 */

}