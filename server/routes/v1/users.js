const express = require('express');

const upload = require('../../utils/file-storage')
// const multer = require('multer')

const { getAllUsers, createNewUser, uploadAvatar, getSpecificUsers } = require('../../controllers/users');
const { authenticated } = require('../../controllers/auth');

// const upload = multer({ dest: `${__dirname}/../../public/storage` })
const usersRouter = express.Router();

usersRouter.route('/').get(authenticated, getAllUsers).post(createNewUser);
// usersRouter.route('/:id').patch( updateUsers ).delete( deleteUser );

usersRouter.get('/:id', getSpecificUsers)

usersRouter.patch('/:id', (req, res) => {
  res.send('user updated');
});

usersRouter.delete('/:id', (req, res) => {
  res.send('user deleted');
});

// usersRouter.post('/photo', authenticated, upload.single('avatar'), uploadAvatar);
usersRouter.post('/photo', upload.single('avatar'), uploadAvatar);

module.exports = usersRouter;
