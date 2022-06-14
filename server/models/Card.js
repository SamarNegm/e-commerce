const { Schema, model } = require('mongoose');

const cardSchema = new Schema({

    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            quantity: {
                type: Number,
                default: 1,
            },
        }
    ]

}, { timestamps: true });

export default model('Order', cardSchema);