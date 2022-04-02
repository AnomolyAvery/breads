const { Schema, model } = require('mongoose');

const breadSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    hasGluten: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: 'http://placehold.it/500x500.png',
    },
});

const BreadModel = model('Bread', breadSchema);

module.exports = BreadModel;
