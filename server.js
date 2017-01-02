import express from 'express';
import routes from './routes.js';
// crdentials from separate module
import credentials from './credentials.js';
import Sequelize from 'sequelize';
let app = express();

//instantiate new sequelize instance
var db =  new Sequelize(`postgres://${credentials.username}:${credentials.password}@localhost:5432/chordapp`);

app.use(routes);

//test database connection
db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


//define users table
var Users = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  }
},
{
  timestamps: false
});

// Users.sync().then(function() {
//   var data = {
//     id: 2,
//     name: 'Gilbert',
//     email: 'gilbert@dog.com'
//   }
//
//   Users.create(data).then(function(data) {
//     console.log(data.get());
//   })
// });

//returns are records for users table
Users.findAll().then(function(users) {
  users.forEach(function(val, index) {
    console.log(users[index].dataValues);
  })
})


app.listen(3000, () => console.log('listening on port 3000'));
