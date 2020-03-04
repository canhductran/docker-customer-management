const mongoose = require('mongoose');
const config = require('./config');

// connect to mongo db
const mongoUri = 'mongodb://mongo:27017/customermanagement';
mongoose.connect(mongoUri, { keepAlive: 1 })
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error('Could not connect to MongoDB...', err));