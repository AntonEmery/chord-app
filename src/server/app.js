const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes.js');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const expressValidator = require('express-validator');
const { promisify } = require('es6-promisify');
require('./handlers/passport');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToClient = path.join(__dirname, '..', 'client', 'build');

// ToDo: why does commenting this out eliminate the CORS error when saving chord sheets?
app.set('trust proxy', 1) // trust first proxy

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

//stores data on visitors from request to request and keeps them logged in
app.use(session({
  domain: process.env.CLIENT_URL,
  secret: 'keyboard dog',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { sameSite: 'none', secure: true, httpOnly: false, maxAge: 600000000 }
}))

// promisify some callback based APIs
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Options");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');

  req.login = promisify(req.login, req);
  next();
});

let corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  preFlightContinue: true,
  exposedHeaders: ['set-cookie'],
}

app.use(cors(corsOptions));


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(pathToClient));
app.use(routes);

module.exports = app;


