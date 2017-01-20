const routes = require('express').Router();
const controller = require('../controllers/videoController')

routes.get('/', (req, res) => {
    controller.list(req, res);
});

routes.post('/', (req, res) => {
    controller.save(req, res);
});

routes.get('/:id', (req, res) => {
    controller.info(req, res);
});


module.exports = routes;