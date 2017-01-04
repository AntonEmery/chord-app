import express from 'express';
import path from 'path';
import { userData } from './database.js';


let router = express.Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')) );
router.get('/home', (req, res) => res.send('home route'));
router.get('/about', (req, res) => res.send('about route'));
router.get('/users', (req, res) => {
  console.log( userData )
  res.send('about route')
})

module.exports = router;
