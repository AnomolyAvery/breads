const { Schema, model, Types } = require('mongoose');
const BreadModel = require('./bread');

const bakerSchema = new Schema(
    {
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
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker',
});

const BakerModel = model('Baker', bakerSchema);

module.exports = BakerModel;
