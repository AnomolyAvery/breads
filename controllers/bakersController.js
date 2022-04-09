const { Router } = require('express');
const BakerModel = require('../models/baker');
const data = require('../models/baker_seed');

const bakersRouter = Router();

bakersRouter.get('/', async (req, res) => {
    const bakers = await BakerModel.find().populate('breads');
    res.send(bakers);
});

bakersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const baker = await BakerModel.findById(id).populate({
            path: 'breads',
            options: {
                limit: 2,
            },
        });
        if (!baker) {
            return res.status(404).send('Baker not found');
        }
        return res.render('bakerShow', {
            baker: baker,
        });
    } catch (err) {
        return res.status(500).send('Something went wrong...');
    }
});

bakersRouter.delete('/:id', async (req, res) => {
    try {
        await BakerModel.findByIdAndDelete(req.params.id);
        return res.status(303).redirect('/breads');
    } catch (err) {
        return res.status(500).send('Something went wrong...');
    }
});

bakersRouter.get('/data/seed', async (req, res) => {
    await BakerModel.insertMany(data);
    return res.redirect('/breads');
});

module.exports = bakersRouter;
