module.exports = (app) => {
                                              
    const otdlmondrp = require('../controllers/controller_otdlmondrp.js');
    app.get('/otdlmondrp', otdlmondrp.findAll);
    app.post('/otdlmondrp/:otdlmondrpOTDServerId/:otdlmondrpOTDComponentId', otdlmondrp.updateOneOTDServerComponent);
    app.post('/otdlmondrp/:otdlmondrpOTDServerId', otdlmondrp.updateOneServer);

    const otdlmonprd = require('../controllers/controller_otdlmonprd.js');
    app.get('/otdlmonprd', otdlmonprd.findAll);
    app.post('/otdlmonprd/:otdlmonprdOTDServerId/:otdlmonprdOTDComponentId', otdlmonprd.updateOneOTDServerComponent);
    app.post('/otdlmonprd/:otdlmonprdOTDServerId', otdlmonprd.updateOneServer);

}