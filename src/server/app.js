import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
const MongoStore = require('connect-mongo')(session);
const expressValidator = require('express-validator');
const { promisify } = require('es6-promisify');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToClient = path.join(__dirname, '..', 'client', 'build');

app.set('trust proxy', 1) // trust first proxy

//stores data on visitors from request to request and keeps them logged in
app.use(session({
  domain: 'http://localhost:3000',
  secret: 'keyboard dog',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { secure: false, httpOnly: false }
}))

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(pathToClient));
app.use(routes);

module.exports = app;


