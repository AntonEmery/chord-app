import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import path from 'path';
import cors from 'cors';


const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToClient = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(pathToClient));
app.use(routes);

module.exports = app;


