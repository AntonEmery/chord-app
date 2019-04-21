(async () => {
  console.log('test')
  require('./src/server/models/ChordSheet');
  console.log('test1')
  require('./src/server/models/User');
  const { deleteChordSheet } = require('./src/server/controllers/chordSheetController');
  console.log('test3')

  const req = {
    body: {
      id: '5cbb4a9d1f5979d166949c5d'
    }
  }
  const res = {}
  console.log('test5')

  await deleteChordSheet(req, res)
  console.log('test2')
})()

setInterval(() => { }, 1000);
