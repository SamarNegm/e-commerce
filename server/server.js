require('dotenv').config();
const { DB_URL, PORT, HOST } = process.env;

const mongoose = require('mongoose');
const app = require('./app');


// TODO: CONNECT TO MONGODB
mongoose
.connect(DB_URL)
.then(() => {
  console.log('connected');
})
.catch(() => {
  console.log('There is something wrong');
});

// Models
const User = require('./models/User');
const Post = require('./models/User');

// Server Listen
app.listen(PORT, HOST, () => {
  console.log('server is running');
});
