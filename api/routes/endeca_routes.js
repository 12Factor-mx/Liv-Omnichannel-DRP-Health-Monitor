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
}