import express from 'express';
import path from 'path';
let router = express.Router();


router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')) );
router.get('/home', (req, res) => res.send('home route'));





module.exports = router;
