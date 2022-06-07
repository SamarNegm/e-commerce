const { Schema, model } = require('mongoose');

const tourScheme = new Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    duration: Number,
    maxGroupSize: {
        type: Number,
        default: 25
    },
    difficulty: {
        type: String,
        enum: ["easy","medium","difficult"]
    },
    ratingsAverage: Number,
    datingsQuantity: Number,
    price: Number,
    summary: String,
    description: String,
    // imageCover: String,
    images: { type: Array },
    startDates: { type: Date }
})

const Tour = model('Tour', tourScheme);

module.exports = Tour