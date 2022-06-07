const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const { hash } = require('bcryptjs');

const userScheme = new Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: isEmail,
            message: "Enter valide email"
        }
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    avatar: {
        type: String,
    },
    phone: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    address: {
        country: String,
        city: String,
        street: String,
        houseNumber: String,
        zipCode: String,
    },
    accountType: {
        type: String,
        required: true,
        enum: ['person', 'organization'],

    },
    friends: {
        type: Array,
        default: [],
    },



}, {
    timestamps: true
})



const User = model('User', userScheme);

module.exports = User