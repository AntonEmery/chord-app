import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import path from 'path';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToClient = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(pathToClient));
app.use('/', routes);

module.exports = app;


