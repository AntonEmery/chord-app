const passport = require('passport');
const crypto = require('crypto'); // this module is included with node
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = passport.authenticate('local', {
  successRedirect: 'http://localhost:3000/chordsheets',
  failureRedirect: 'http://localhost:3000'
});

exports.logout = (req, res) => {
  req.logout();
  req.session.destroy(function() {
    res
      .clearCookie('connect.sid', { path: '/' })
      .status(200)
      .send('Cookie deleted.');
  });
};

exports.isLoggedIn = (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ status: 'logged in' });
  } else {
    res.send({ status: 'not logged in' });
  }
  res.end();
};
