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
        type: Schema.Types.ObjectId,
        ref: 'Baker',
        required: true,
    },
});

breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked with love by ${
        this.baker.name
    }, who has been with us since ${this.baker.startDate.getFullYear()}`;
};

const BreadModel = model('Bread', breadSchema);

module.exports = BreadModel;
