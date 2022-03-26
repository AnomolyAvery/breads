const { Router } = require('express');
const bread = require('../models/bread');

const breadsRouter = Router();

breadsRouter.get('/', (req, res) => {
    res.render('index', {
        breads: bread,
    });
});

// CREATE
breadsRouter.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image =
            'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    bread.push(req.body);
    res.redirect('/breads');
});

breadsRouter.get('/new', (req, res) => {
    res.render('new');
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
