import express from 'express';
import path from 'path';
import { Users, ChordSheets } from './database.js';


let router = express.Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')) );
router.get('/chordSheets/:id', (req, res) => {
  ChordSheets.findById(req.params.id)
    .then((chordSheet) => res.send(chordSheet))
});

router.get('/users', (req, res) => {
  Users.findAll().then(function(allUsers) {
    res.send(allUsers)
  });

});

module.exports = router;
