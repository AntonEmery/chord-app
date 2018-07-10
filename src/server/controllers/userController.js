const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save();
}