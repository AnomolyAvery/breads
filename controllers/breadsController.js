const { Router } = require('express');
const bread = require('../models/bread');

const breadsRouter = Router();

breadsRouter.get('/', (req, res) => {
    res.render('index', {
        breads: bread,
    });
});

breadsRouter.get('/:arrayIndex', (req, res) => {
    res.json(bread[req.params.arrayIndex]);
});

module.exports = breadsRouter;
