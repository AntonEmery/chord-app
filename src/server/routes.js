import express from 'express';
import path from 'path';
import { Users, ChordSheets } from './database.js';
const chordSheetController = require('./controllers/chordSheetController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const passport = require('passport');
const cors = require('cors');



let router = express.Router();

// router.post('/login', authController.login);

router.post('/login', passport.authenticate('local', { failureRedirect: 'http://localhost:3000' }),
  function (req, res) {
    res.redirect('http://localhost:3000/chordsheets');
  }
);

// Create user
router.post('/register', userController.validateRegister, userController.register, authController.login);

router.get('/isLoggedIn', authController.isLoggedIn);

router.get('/logout', authController.logout)

// Create chord sheet
router.get('/createChordSheet', chordSheetController.createChordSheet);

// Returns chord sheets based on a user
router.get('/getChordSheets', chordSheetController.returnChordSheetsByUser);

// Returns individual chord sheet
router.get('/getChordSheet/:id', chordSheetController.returnChordSheetById);

// Saves a chord sheet
router.post('/saveChordSheet/:id', chordSheetController.saveChordSheet);

// Deletes a chord sheet
router.delete('/deleteChordSheet/', chordSheetController.deleteChordSheet);

// Returns all users
router.get('/users', (req, res) => {
  Users.findAll().then((allUsers) => res.send(allUsers))
})

// Creates a new user
router.post('/users', (req, res) => {
  Users.create({
    name: req.body.name,
    email: req.body.email
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error))
})

// Deletes a user
router.delete('/users', (req, res) => {
  Users.destroy({
    where: {
      id: req.body.id
    }
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(data))
})

// Reset User Password
router.post('/requestReset', userController.requestReset);
router.post('/setPassword', userController.setPassword)

module.exports = router;
