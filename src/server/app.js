import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import path from 'path';
import cors from 'cors';
import session from 'express-session';


const app = express();
app.use(cors());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  domain: 'http://localhost:3000',
  secret: 'keyboard dog',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: false }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToClient = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(pathToClient));
app.use(routes);

module.exports = app;


