module.exports = (app) => {

    const rootmondrp = require('../controllers/controller.js');
    const rootmonprd = require('../controllers/controller.1.js')
    app.get('/rootmondrp', rootmondrp.findAll);
    app.get('/rootmonprd', rootmonprd.findAll);

    const ecommercelmonprd = require('../controllers/controller_ecommercelmonprd.js');
    const ecommercelmondrp = require('../controllers/controller_ecommercelmondrp.js');
    app.get('/ecommercelmonprd', ecommercelmonprd.findAll);
    app.get('/ecommercelmondrp', ecommercelmondrp.findAll);

    const weblogiclmonprd = require('../controllers/controller_weblogiclmonprd.js');
    const weblogiclmondrp = require('../controllers/controller_weblogiclmondrp.js');
    app.get('/weblogiclmonprd', weblogiclmonprd.findAll);
    app.get('/weblogiclmondrp', weblogiclmondrp.findAll);

    const weblogicserverslmonprd = require('../controllers/controller_weblogicserverslmonprd.js');
    const weblogicserverslmondrp = require('../controllers/controller_weblogicserverslmondrp.js');
    app.get('/weblogicserverslmonprd', weblogicserverslmonprd.findAll);
    app.get('/weblogicserverslmondrp', weblogicserverslmondrp.findAll);

}