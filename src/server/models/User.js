const mongoose = require('mongoose');
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // ensures that each email in the database is unique
    unique: true,
    required: 'Please enter an email',
    lowercase:true,
    // removes extra spaces
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address']
  },
  name: {
    type: String,
    required: 'Please enter a name',
    trim: true
  },
  // chordSheets is an array of ObjectId's, the ref tells Mongoose what model to use during population
  // all id's stored here must be id's from the ChordSheet Model.
  chordSheets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChordSheet'
    }
  ]
});

// uses passport to handle passwords and hashing. this specifies the email as the field they will login with
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);