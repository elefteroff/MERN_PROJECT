const ConsultantsControllers = require('../controllers/consultants.controllers');

module.exports = (app) => {
    app.post('/api/consultants/new', ConsultantsControllers.createConsultants);
    // app.post('/api/consultants/clients/new', ConsultantsControllers.createConsultants);
    app.get('/api/consultants', ConsultantsControllers.getAllConsultants);
    app.get('/api/consultants/:id', ConsultantsControllers.getOneConsultants);
    app.delete('/api/consultants/:id', ConsultantsControllers.deleteOneConsultants);
}