import express from 'express';
import routes from './routes.js';
// crdentials from separate module
import credentials from './credentials.js';
import Sequelize from 'sequelize';
let app = express();

var sequelize =  new Sequelize(`postgres://${credentials.username}:${credentials.password}@localhost:5432/chordapp`);

app.use(routes);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

app.listen(3000, () => console.log('listening on port 3000'));
