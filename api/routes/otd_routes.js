module.exports = (app) => {
                                              
      /***
      * ---------------------------------------------------
      * Otd Liverpool DRP
      * ---------------------------------------------------
      *  */
     {
       const otdlmondrp = require('../controllers/controller_otdlmondrp.js');
       // get all 
       app.get('/otdlmondrp', otdlmondrp.findAll);
       // get, and update one otd server
       app.get('/otdlmondrp/:otdlmondrpserver', otdlmondrp.findOneServer);
       app.post('/otdlmondrp/:otdlmondrpserver', otdlmondrp.updateOneServer);
       // get, and update one otd server/service
       app.get('/otdlmondrp/:otdlmondrpserver/:otdlmondrpserverservice', otdlmondrp.findOneServerService);
       app.post('/otdlmondrp/:otdlmondrpserver/:otdlmondrpserverservice', otdlmondrp.updateOneServerService);
       // update one  otd server/service/component
       app.post('/otdlmondrp/:otdlmondrpserver/:otdlmondrpserverservice/:otdlmondrpserverscomponent', otdlmondrp.updateOneServerServiceComponent);
       // misc
       app.post('/otdlmondrp/updateparents', otdlmondrp.updateParents)
       app.put('/otdlmondrp/:otdlmondrpId', otdlmondrp.update);
     }

     /***
      * ----------------------------------------------------
      * Otd Liverpool PRD
      * ----------------------------------------------------
      *  */
     {
       const otdlmonprd = require('../controllers/controller_otdlmonprd.js');
       // get all 
       app.get('/otdlmonprd', otdlmonprd.findAll);
       // get, and update one otd server
       app.get('/otdlmonprd/:otdlmonprdserver', otdlmonprd.findOneServer);
       app.post('/otdlmonprd/:otdlmonprdserver', otdlmonprd.updateOneServer);
       // get, and update one otd server/service
       app.get('/otdlmonprd/:otdlmonprdserver/:otdlmonprdserverservice', otdlmonprd.findOneServerService);
       app.post('/otdlmonprd/:otdlmonprdserver/:otdlmonprdserverservice', otdlmonprd.updateOneServerService);
       // update one  otd server/service/component
       app.post('/otdlmonprd/:otdlmonprdserver/:otdlmonprdserverservice/:otdlmonprdserverscomponent', otdlmonprd.updateOneServerServiceComponent);
       // misc
       app.post('/otdlmonprd/updateparents', otdlmonprd.updateParents)
       app.put('/otdlmonprd/:otdlmonprdId', otdlmonprd.update);
     }



      /***
       * ---------------------------------------------------
       * Otd Suburbia DRP
       * ---------------------------------------------------
       *  */
      {
        const otdsubmondrp = require('../controllers/controller_otdsubmondrp.js');
        // get all 
        app.get('/otdsubmondrp', otdsubmondrp.findAll);
        // get, and update one otd server
        app.get('/otdsubmondrp/:otdsubmondrpserver', otdsubmondrp.findOneServer);
        app.post('/otdsubmondrp/:otdsubmondrpserver', otdsubmondrp.updateOneServer);
        // get, and update one otd server/service
        app.get('/otdsubmondrp/:otdsubmondrpserver/:otdsubmondrpserverservice', otdsubmondrp.findOneServerService);
        app.post('/otdsubmondrp/:otdsubmondrpserver/:otdsubmondrpserverservice', otdsubmondrp.updateOneServerService);
        // update one  otd server/service/component
        app.post('/otdsubmondrp/:otdsubmondrpserver/:otdsubmondrpserverservice/:otdsubmondrpserverscomponent', otdsubmondrp.updateOneServerServiceComponent);
        // misc
        app.put('/otdsubmondrp/updateparents', otdsubmondrp.updateParents)
        app.put('/otdsubmondrp/:otdsubmondrpId', otdsubmondrp.update);
      }

      /***
       * ----------------------------------------------------
       * Otd Suburbia PRD
       * ----------------------------------------------------
       *  */
      {
        const otdsubmonprd = require('../controllers/controller_otdsubmonprd.js');
        // get all 
        app.get('/otdsubmonprd', otdsubmonprd.findAll);
        // get, and update one otd server
        app.get('/otdsubmonprd/:otdsubmonprdserver', otdsubmonprd.findOneServer);
        app.post('/otdsubmonprd/:otdsubmonprdserver', otdsubmonprd.updateOneServer);
        // get, and update one otd server/service
        app.get('/otdsubmonprd/:otdsubmonprdserver/:otdsubmonprdserverservice', otdsubmonprd.findOneServerService);
        app.post('/otdsubmonprd/:otdsubmonprdserver/:otdsubmonprdserverservice', otdsubmonprd.updateOneServerService);
        // update one  otd server/service/component
        app.post('/otdsubmonprd/:otdsubmonprdserver/:otdsubmonprdserverservice/:otdsubmonprdserverscomponent', otdsubmonprd.updateOneServerServiceComponent);
        // misc
        app.put('/otdsubmonprd/updateparents', otdsubmonprd.updateParents)
        app.put('/otdsubmonprd/:otdsubmonprdId', otdsubmonprd.update);
      }

}