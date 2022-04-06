const { Schema, model, Types } = require('mongoose');

const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
    },
    startDate: {
        type: Date,
        required: true,
    },
    bio: String,
});

const BakerModel = model('Baker', bakerSchema);

module.exports = BakerModel;
