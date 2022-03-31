const { Router } = require('express');
const bread = require('../models/bread');

const breadsRouter = Router();

// INDEX
breadsRouter.get('/', (req, res) => {
    return res.render('index', {
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
    return res.status(303).redirect('/breads');
});

breadsRouter.get('/new', (req, res) => {
    res.render('new');
});

breadsRouter.get('/:arrayIndex', (req, res) => {
    const foundBread = bread[req.params.arrayIndex];

    if (!foundBread) {
        return res.status(404).send('Bread not found');
    }

    return res.render('show', {
        bread: foundBread,
        index: req.params.arrayIndex,
    });
});

breadsRouter.delete('/:arrayIndex', (req, res) => {
    const foundBread = bread[req.params.arrayIndex];

    if (!foundBread) {
        return res.redirect('/breads');
    }

    bread.splice(req.params.arrayIndex, 1);
    return res.status(303).redirect('/breads');
});

breadsRouter.put('/:arrayIndex', (req, res) => {
    if (isNaN(req.params.arrayIndex)) {
        return res.status(404).send('Invalid bread index');
    }

    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }

    bread[req.params.arrayIndex] = req.body;
    return res.status(303).redirect(`/breads/${req.params.arrayIndex}`);
});

breadsRouter.get('/:arrayIndex/edit', (req, res) => {
    res.render('edit', {
        bread: bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    });
});

module.exports = breadsRouter;
