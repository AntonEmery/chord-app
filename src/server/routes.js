import express from 'express';
import path from 'path';
import { Users, ChordSheets } from './database.js';
const chordSheetController = require('./controllers/chordSheetController');
const userController = require('./controllers/userController');


let router = express.Router();

// user login
router.post('/login', userController.loginUser);

// create user
router.post('/createUser', userController.createUser);

//returns chord sheet with a given id
router.get('/chordSheets/:id', chordSheetController.returnChordSheetById);

//returns chord sheets associated with a user id
router.get('/chordSheets/:id', chordSheetController.returnChordSheetByUser);

//saves a chord sheet
router.post('/chordSheets/:id', chordSheetController.saveChordSheet);

//updates a chord sheet
router.post('/updateChordSheet', (req, res) => {
  ChordSheets.findById(req.body.id).then(function(chordSheet) {
    chordSheet.updateAttributes({
      chords: req.body.chords,
      user_id: req.body.user_id
    })
    .then(function(data) {
        res.status(200).json(data);
    })
    .catch(function(error) {
      res.status(500).json(error);
    })
  })
})

//returns all users
router.get('/users', (req, res) => {
  Users.findAll().then((allUsers) => res.send(allUsers))
})

//creates a new user
router.post('/users', (req,res) => {
  Users.create({
    name: req.body.name,
    email: req.body.email
  })
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json(error))
})

//deletes a user
router.delete('/users', (req, res) => {
  Users.destroy({
    where: {
      id: req.body.id
    }
  })
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json(data))
})

module.exports = router;
