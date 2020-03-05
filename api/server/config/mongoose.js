const mongoose = require('mongoose');
const config = require('./config');

console.log('test env');
console.log(config);

// connect to mongo db
const mongoUri = `mongodb://mongo:${config.mongo.port}/customermanagement`;
mongoose.connect(mongoUri)
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error('Could not connect to MongoDB...', err));
