module.exports = (app) => {

    const rootmondrp = require('../controllers/controller.js');
    app.get('/rootmondrp', rootmondrp.findAll);
    app.put('/rootmondrp/:rootmondrpId', rootmondrp.update);
    const rootmonprd = require('../controllers/controller.1.js')
    app.get('/rootmonprd', rootmonprd.findAll);
    app.put('/rootmonprd/:rootmonprdId', rootmonprd.update);


    const ecommercelmonprd = require('../controllers/controller_ecommercelmonprd.js');
    app.get('/ecommercelmonprd', ecommercelmonprd.findAll);
    app.post('/ecommercelmonprd/updateparents', ecommercelmonprd.updateParents)
    app.put('/ecommercelmonprd/:ecommercelmonprdId', ecommercelmonprd.update);
    const ecommercelmondrp = require('../controllers/controller_ecommercelmondrp.js');
    app.get('/ecommercelmondrp', ecommercelmondrp.findAll);
    app.post('/ecommercelmondrp/updateparents', ecommercelmondrp.updateParents)
    app.put('/ecommercelmondrp/:ecommercelmondrpId', ecommercelmondrp.update);
    
    const weblogiclmonprd = require('../controllers/controller_weblogiclmonprd.js');
    app.get( '/weblogiclmonprd', weblogiclmonprd.findAll);
    app.post('/weblogiclmonprd/updateparents', weblogiclmonprd.updateParents)
    app.put('/weblogiclmonprd/:weblogiclmonprdId', weblogiclmonprd.update);
    const weblogiclmondrp = require('../controllers/controller_weblogiclmondrp.js');
    app.get( '/weblogiclmondrp', weblogiclmondrp.findAll);
    app.post('/weblogiclmondrp/updateparents', weblogiclmondrp.updateParents)
    app.put( '/weblogiclmondrp/:weblogiclmondrpId', weblogiclmondrp.update);
  
    const weblogicserverslmonprd = require('../controllers/controller_weblogicserverslmonprd.js');
    app.get('/weblogicserverslmonprd', weblogicserverslmonprd.findAll);
    app.post('/weblogicserverslmonprd/updateparents', weblogicserverslmonprd.updateParents)
    const weblogicserverslmondrp = require('../controllers/controller_weblogicserverslmondrp.js');
    app.get('/weblogicserverslmondrp', weblogicserverslmondrp.findAll);
    app.post('/weblogicserverslmondrp/updateparents', weblogicserverslmondrp.updateParents)


    const ecommercemulmonprd = require('../controllers/controller_ecommercemulmonprd.js');
    app.get('/ecommercemulmonprd', ecommercemulmonprd.findAll);
    app.post('/ecommercemulmonprd/updateparents', ecommercemulmonprd.updateParents)
    app.put('/ecommercemulmonprd/:ecommercemulmonprdId', ecommercemulmonprd.update);
    const ecommercemulmondrp = require('../controllers/controller_ecommercemulmondrp.js');
    app.get('/ecommercemulmondrp', ecommercemulmondrp.findAll);
    app.post('/ecommercemulmondrp/updateparents', ecommercemulmondrp.updateParents)
    app.put('/ecommercemulmondrp/:ecommercemulmondrpId', ecommercemulmondrp.update);
    
    const weblogicmulmonprd = require('../controllers/controller_weblogicmulmonprd.js');
    app.get( '/weblogicmulmonprd', weblogicmulmonprd.findAll);
    app.post('/weblogicmulmonprd/updateparents', weblogicmulmonprd.updateParents)
    app.put('/weblogicmulmonprd/:weblogicmulmonprdId', weblogicmulmonprd.update);
    const weblogicmulmondrp = require('../controllers/controller_weblogicmulmondrp.js');
    app.get( '/weblogicmulmondrp', weblogicmulmondrp.findAll);
    app.post('/weblogicmulmondrp/updateparents', weblogicmulmondrp.updateParents)
    app.put( '/weblogicmulmondrp/:weblogicmulmondrpId', weblogicmulmondrp.update);
  
    const weblogicserversmulmonprd = require('../controllers/controller_weblogicserversmulmonprd.js');
    app.get('/weblogicserversmulmonprd', weblogicserversmulmonprd.findAll);
    app.post('/weblogicserversmulmonprd/updateparents', weblogicserversmulmonprd.updateParents)
    const weblogicserversmulmondrp = require('../controllers/controller_weblogicserversmulmondrp.js');
    app.get('/weblogicserversmulmondrp', weblogicserversmulmondrp.findAll);
    app.post('/weblogicserversmulmondrp/updateparents', weblogicserversmulmondrp.updateParents)





 
    const ecommercesubmonprd = require('../controllers/controller_ecommercesubmonprd.js');
    app.get('/ecommercesubmonprd', ecommercesubmonprd.findAll);
    app.post('/ecommercesubmonprd/updateparents', ecommercesubmonprd.updateParents)
    app.put('/ecommercesubmonprd/:ecommercesubmonprdId', ecommercesubmonprd.update);
    const ecommercesubmondrp = require('../controllers/controller_ecommercesubmondrp.js');
    app.get('/ecommercesubmondrp', ecommercesubmondrp.findAll);
    app.post('/ecommercesubmondrp/updateparents', ecommercesubmondrp.updateParents)
    app.put('/ecommercesubmondrp/:ecommercesubmondrpId', ecommercesubmondrp.update);
    
    const weblogicsubmonprd = require('../controllers/controller_weblogicsubmonprd.js');
    app.get( '/weblogicsubmonprd', weblogicsubmonprd.findAll);
    app.post('/weblogicsubmonprd/updateparents', weblogicsubmonprd.updateParents)
    app.put('/weblogicsubmonprd/:weblogicsubmonprdId', weblogicsubmonprd.update);
    const weblogicsubmondrp = require('../controllers/controller_weblogicsubmondrp.js');
    app.get( '/weblogicsubmondrp', weblogicsubmondrp.findAll);
    app.post('/weblogicsubmondrp/updateparents', weblogicsubmondrp.updateParents)
    app.put( '/weblogicsubmondrp/:weblogicsubmondrpId', weblogicsubmondrp.update);
  
    const weblogicserverssubmonprd = require('../controllers/controller_weblogicserverssubmonprd.js');
    app.get('/weblogicserverssubmonprd', weblogicserverssubmonprd.findAll);
    app.post('/weblogicserverssubmonprd/updateparents', weblogicserverssubmonprd.updateParents)
    const weblogicserverssubmondrp = require('../controllers/controller_weblogicserverssubmondrp.js');
    app.get('/weblogicserverssubmondrp', weblogicserverssubmondrp.findAll);
    app.post('/weblogicserverssubmondrp/updateparents', weblogicserverssubmondrp.updateParents)
 





//  Esta es la prueba de mejora en codigo

    const ecommercemesmonprd = require('../controllers/controllerECommerce.js');
    app.get('/ecommercemesmonprd', ecommercemesmonprd.findAll);
    app.post('/ecommercemesmonprd/updateparents', ecommercemesmonprd.updateParents)
    app.put('/ecommercemesmonprd/:ecommercemesmonprdId', ecommercemesmonprd.update);

//  Aquí termina la prueba de mejora en codigo


    const weblogicmesmonprd = require('../controllers/controller_weblogicmesmonprd.js');
    app.get( '/weblogicmesmonprd', weblogicmesmonprd.findAll);
    app.post('/weblogicmesmonprd/updateparents', weblogicmesmonprd.updateParents)
    app.put('/weblogicmesmonprd/:weblogicmesmonprdId', weblogicmesmonprd.update);

    const weblogicserversmesmonprd = require('../controllers/controller_weblogicserversmesmonprd.js');
    app.get('/weblogicserversmesmonprd', weblogicserversmesmonprd.findAll);
    app.post('/weblogicserversmesmonprd/updateparents', weblogicserversmesmonprd.updateParents)
    





    const ecommercemesmondrp = require('../controllers/controller_ecommercemesmondrp.js');
    app.get('/ecommercemesmondrp', ecommercemesmondrp.findAll);
    app.post('/ecommercemesmondrp/updateparents', ecommercemesmondrp.updateParents)
    app.put('/ecommercemesmondrp/:ecommercemesmondrpId', ecommercemesmondrp.update);
    
    const weblogicmesmondrp = require('../controllers/controller_weblogicmesmondrp.js');
    app.get( '/weblogicmesmondrp', weblogicmesmondrp.findAll);
    app.post('/weblogicmesmondrp/updateparents', weblogicmesmondrp.updateParents)
    app.put( '/weblogicmesmondrp/:weblogiclmondrpId', weblogicmesmondrp.update);
  
    const weblogicserversmesmondrp = require('../controllers/controller_weblogicserversmesmondrp.js');
    app.get('/weblogicserversmesmondrp', weblogicserversmesmondrp.findAll);
    app.post('/weblogicserversmesmondrp/updateparents', weblogicserversmesmondrp.updateParents)
 

}