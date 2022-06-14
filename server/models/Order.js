const { Schema, model } = require('mongoose');

const orderScema = new Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            quantity: {
                type: Number,
                default: 1,
            },
            amount: { type: Number, required: true },
            address: { type: Object, required: true },
            status: { type: String, default: "pending" },
        }

    ]

}, { timestamps: true });

export default model('Order', orderScema);