const mongoose = require('mongoose');
const config = require('./config');

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect('mongodb://localhost/customermanagement')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));