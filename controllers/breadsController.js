const { Router } = require('express');
const bread = require('../models/bread');

const breadsRouter = Router();

breadsRouter.get('/', (req, res) => {
    res.render('index', {
        breads: bread,
    });
});

breadsRouter.get('/:arrayIndex', (req, res) => {
    const foundBread = bread[req.params.arrayIndex];

    if (!foundBread) {
        return res.send(404);
    }

    res.render('show', {
        bread: foundBread,
    });
});

module.exports = breadsRouter;
