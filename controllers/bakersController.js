const { Router } = require('express');
const BakerModel = require('../models/baker');
const data = require('../models/baker_seed');

const bakersRouter = Router();

bakersRouter.get('/data/seed', async (req, res) => {
    await BakerModel.insertMany(data);
    return res.redirect('/breads');
});

module.exports = bakersRouter;
