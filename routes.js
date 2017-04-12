import express from 'express';
import path from 'path';
import { Users, ChordSheets } from './database.js';


let router = express.Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')) );

router.get('/chordSheets/:id', (req, res) => {
  ChordSheets.findById(req.params.id)
    .then((chordSheet) => res.send(chordSheet))
});

router.post('/saveChordSheet/', (req, res) => {
    console.log(req.body);
    ChordSheets.create({
      name: req.body.name,
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

router.post('/updateChordSheet', () => {
  ChordSheets.findById(5).then(function(chordSheet) {
    chordSheet.updateAttributes({
      chords: "blah"
    })
  })
})

router.post('/users', (req,res) => {
  Users.create({
    name: req.body.name,
    email: req.body.email
  })
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json(error))
})

router.delete('/users')

router.get('/users', (req, res) => {
  Users.findAll().then((allUsers) => res.send(allUsers))
})


module.exports = router;
