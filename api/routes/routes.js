module.exports = (app) => {

    const rootmondrp = require('../controllers/controller.js');
    const rootmonprd = require('../controllers/controller.1.js')
    app.get('/rootmondrp', rootmondrp.findAll);
    app.get('/rootmonprd', rootmonprd.findAll);
    app.put('/rootmondrp/:rootmondrpId', rootmondrp.update);


    const ecommercelmonprd = require('../controllers/controller_ecommercelmonprd.js');
    const ecommercelmondrp = require('../controllers/controller_ecommercelmondrp.js');
    app.get('/ecommercelmonprd', ecommercelmonprd.findAll);
    app.get('/ecommercelmondrp', ecommercelmondrp.findAll);
    //app.post('/ecommercelmondrp/updateparents', ecommercelmondrp.updateParents)
    app.put('/ecommercelmondrp/:ecommercelmondrpId', ecommercelmondrp.update);
    
    const weblogiclmonprd = require('../controllers/controller_weblogiclmonprd.js');
    const weblogiclmondrp = require('../controllers/controller_weblogiclmondrp.js');
    app.get( '/weblogiclmonprd', weblogiclmonprd.findAll);
    app.get( '/weblogiclmondrp', weblogiclmondrp.findAll);
    app.post('/weblogiclmondrp/updateparents', weblogiclmondrp.updateParents)
    //app.put( '/weblogiclmondrp/:weblogiclmondrpId', weblogiclmondrp.update);

    const weblogicserverslmonprd = require('../controllers/controller_weblogicserverslmonprd.js');
    const weblogicserverslmondrp = require('../controllers/controller_weblogicserverslmondrp.js');
    app.get('/weblogicserverslmonprd', weblogicserverslmonprd.findAll);
    app.get('/weblogicserverslmondrp', weblogicserverslmondrp.findAll);
    app.post('/weblogicserverslmondrp/updateparents', weblogicserverslmondrp.updateParents)

}