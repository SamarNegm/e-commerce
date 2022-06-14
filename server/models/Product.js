const { Schema, model } = require('mongoose');

const prouctScema = new Schema({
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    categories: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },


});

export default model('Order', prouctScema);