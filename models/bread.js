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
    baker: {
        type: String,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
    },
});

breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked by ${this.baker}`;
};

const BreadModel = model('Bread', breadSchema);

module.exports = BreadModel;
