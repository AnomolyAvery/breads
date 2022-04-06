const { Router } = require('express');
const { isValidObjectId } = require('mongoose');
const BakerModel = require('../models/baker');
const BreadModel = require('../models/bread');

const breadsRouter = Router();

// INDEX
breadsRouter.get('/', async (req, res) => {
    const bakers = await BakerModel.find();
    const breads = await BreadModel.find();

    return res.render('index', {
        breads: breads,
        bakers: bakers,
    });
});

// CREATE
breadsRouter.post('/', async (req, res) => {
    try {
        const bread = new BreadModel();

        bread.name = req.body.name;
        bread.hasGluten = req.body.hasGluten === 'on';
        bread.image = req.body.image
            ? req.body.image
            : 'https://picsum.photos/500';
        bread.baker = req.body.baker;

        await bread.save();
        return res.status(303).redirect('/breads');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong...');
    }
});

breadsRouter.get('/new', async (req, res) => {
    const bakers = await BakerModel.find();
    res.render('new', {
        bakers,
    });
});

breadsRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).send('Not found');
    }

    const bread = await BreadModel.findById(id).populate('baker');

    if (!bread) {
        return res.status(404).send('Bread not found');
    }

    return res.render('show', {
        bread: bread,
        index: bread._id,
    });
});

breadsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).send('Not found');
    }

    await BreadModel.findByIdAndDelete(id);
    return res.status(303).redirect('/breads');
});

breadsRouter.put('/:id', async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).send('Not found');
    }

    try {
        const { name, image, hasGluten, baker } = req.body;

        await BreadModel.findByIdAndUpdate(id, {
            name: name,
            image: image,
            hasGluten: hasGluten === 'on',
            baker: baker,
        });

        return res.status(303).redirect(`/breads/${id}`);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong...');
    }
});

breadsRouter.get('/:id/edit', async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).send('Not found');
    }

    const bread = await BreadModel.findById(id);
    if (!bread) {
        return res.status(404).send('Bread not found');
    }

    const bakers = await BakerModel.find();

    res.render('edit', {
        bread: bread,
        bakers: bakers,
    });
});

module.exports = breadsRouter;
