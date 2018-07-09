const mongoose = require('mongoose');


// Import variables.env file
require('dotenv').config({path: 'variables.env'});

// Connect to database
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.error(err.message);
});

// Start app


