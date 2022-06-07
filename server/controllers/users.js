const User = require('../models/User');
const { catchAsync } = require('../utils/utils')

module.exports = {
    getAllUsers: catchAsync( async (req, res, next) => {
        res.json({
            status: 'success',
            data: await User.find()
        })
    }),
    getSpecificUsers: catchAsync( async (req, res, next) => {
        res.json({
            status: 'success',
            data: await User.find(req.params.id)
        })
    }),
    createNewUser: async (req, res, next) => {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password,
        });
        res.json({
            status: 'success',
            data: user,
        })
    },
    uploadAvatar: async (req, res, next) => {
        await User.findByIdAndUpdate(
            req.userId,
            { avatar: req.file.path },
            { new: true });

        res.json({message: "avatar"})
    }
}