const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { catchAsync } = require('../utils/utils')
const User = require('../models/User');

module.exports = {
    login: catchAsync(async (req, res) => {
        const { email, password } = req.body;
        // find email
        const user = await User.findOne({ email });
        console.log(user);
        // match
        if (!user || !(await bcrypt.compare(password, user.password))) {
            console.log('user not found');
            res.json({ status: 'failure', message: 'Invalid Email or Password' })

        }
        else {

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '90d'
            })

            res.status(202).json({ message: "Success", data: user, token });
        }
    }),
    signup: catchAsync(async (req, res) => {
        console.log(req.body);
        const { firstName, lastName, password, email, accountType, address } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "Success", data: "Already Exist" });

        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            name: `${firstName} ${lastName}`,
            email: email,
            password: hashedPassword,
            accountType: accountType,
            address: address,

        });
        console.log(user);
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "10h" });
        console.log(`Token: ${token}`);
        res.status(202).json({ message: "Success", data: user, token });


    }),
    authenticated: (req, res, next) => {
        try {
            const token = req.headers.autherization.split(' ')[1];

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
            const { id } = decodedToken;
            req.userId = id;
            return next();
        } catch (error) {
            res.json({
                status: 'failure',
                message: 'You are not Autherized'
            })
        }
    }
}