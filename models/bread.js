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
        default: 'https://picsum.photos/500',
    },
});

const BreadModel = model('Bread', breadSchema);

module.exports = BreadModel;
