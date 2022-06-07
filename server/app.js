require('dotenv').config();
const { CLIENT_URL } = process.env;
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

// TODO:: ROUTES CALL
// const postsRouter = require('./routes/v1/posts');
const usersRouter = require('./routes/v1/users');
const authRouter = require('./routes/v1/auth');

// TODO:: CONFIGURATIONS 
const app = express();
app.use(express.json());
app.use(morgan('dev'));
const corsOptions = {
    origin: CLIENT_URL
}
app.use(cors());

// TODO:: SIMPLIFY ROUTING
// app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1', authRouter);

app.all('*', (req, res) => {
    res.json({
        status: 'failure',
        message: 'wrong url'
    })
});

app.use((err, req, res, next) => {
    console.log('global error handler');
    // res.status(400).json({ errot: err });
    // next();

});

module.exports = app;
