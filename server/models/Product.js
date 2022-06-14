const { Schema, model } = require('mongoose');

const prouctScema = new Schema({
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },


}, { timestamps: true });

export default model('Order', prouctScema);