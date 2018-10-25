module.exports = (app) => {

                                                  
    const endecalmondrp = require('../controllers/controller_endecalmondrp.js');
    app.get( '/endecalmondrp', endecalmondrp.findAll);
    app.post('/endecalmondrp/updateparents', endecalmondrp.updateParents)
    app.put('/endecalmondrp/:endecalmondrpId', endecalmondrp.update);

    const endecalmonprd = require('../controllers/controller_endecalmonprd.js');
    app.get('/endecalmonprd', endecalmonprd.findAll);
    app.post('/endecalmonprd/updateparents', endecalmonprd.updateParents)
    app.put('/endecalmonprd/:endecalmonprdId', endecalmonprd.update);


    /*const weblogiclmondrp = require('../controllers/controller_weblogiclmondrp.js');
    app.get( '/weblogiclmondrp', weblogiclmondrp.findAll);
    app.post('/weblogiclmondrp/updateparents', weblogiclmondrp.updateParents)
    app.put( '/weblogiclmondrp/:weblogiclmondrpId', weblogiclmondrp.update); */

    const endecamulmondrp = require('../controllers/controller_endecamulmondrp.js');
    app.get( '/endecamulmondrp', endecamulmondrp.findAll);
    app.post('/endecamulmondrp/updateparents', endecamulmondrp.updateParents)
    app.put('/endecamulmondrp/:endecamulmondrpId', endecamulmondrp.update);

    const endecamulmonprd = require('../controllers/controller_endecamulmonprd.js');
    app.get('/endecamulmonprd', endecamulmonprd.findAll);
    app.post('/endecamulmonprd/updateparents', endecamulmonprd.updateParents)
    app.put('/endecamulmonprd/:endecamulmonprdId', endecamulmonprd.update);

/* 
    const endecasubmondrp = require('../controllers/controller_endecasubmondrp.js');
    app.get( '/endecasubmondrp', endecasubmondrp.findAll);
    app.post('/endecasubmondrp/updateparents', endecasubmondrp.updateParents)
    app.put('/endecasubmondrp/:endecasubmondrpId', endecasubmondrp.update);

    const endecasubmonprd = require('../controllers/controller_endecasubmonprd.js');
    app.get('/endecasubmonprd', endecasubmonprd.findAll);
    app.post('/endecasubmonprd/updateparents', endecasubmonprd.updateParents)
    app.put('/endecasubmonprd/:endecasubmonprdId', endecasubmonprd.update);


    const endecamesmondrp = require('../controllers/controller_endecamesmondrp.js');
    app.get( '/endecamesmondrp', endecamesmondrp.findAll);
    app.post('/endecamesmondrp/updateparents', endecamesmondrp.updateParents)
    app.put('/endecamesmondrp/:endecamesmondrpId', endecamesmondrp.update);

    const endecamesmonprd = require('../controllers/controller_endecamesmonprd.js');
    app.get('/endecamesmonprd', endecamesmonprd.findAll);
    app.post('/endecamesmonprd/updateparents', endecamesmonprd.updateParents)
    app.put('/endecamesmonprd/:endecamesmonprdId', endecamesmonprd.update);
 */

}