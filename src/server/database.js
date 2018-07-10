// import Sequelize from 'sequelize';
// import credentials from './credentials.js';


// //instantiate new sequelize instance
// var db =  new Sequelize(`postgres://${credentials.username}:${credentials.password}@localhost:5432/chordapp`);

// //test database connection
// db
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });


// //define users table. dont need to specify id since it has been created in DB
// var Users = db.define('users', {
//   name: {
//     type: Sequelize.TEXT
//   },
//   email: {
//     type: Sequelize.TEXT
//   }
// },
// {
//   timestamps: false
// });

// var ChordSheets = db.define('chord_sheets', {
//   name: {
//     type: Sequelize.TEXT
//   },
//   chords: {
//     type: Sequelize.ARRAY(Sequelize.JSON)
//   },
//   user_id: {
//     type: Sequelize.INTEGER
//   }
// })

// db.sync();


// module.exports = {
//   Users,
//   ChordSheets
// }
