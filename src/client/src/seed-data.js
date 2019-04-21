/*******
chord_sheet table
id, chords, user_id, name_of_sheet
1, "[[E major,0,2,2,1,0,0], [chord_name,x,x,x,2,3,2]]", user_ id, name_of_sheet
*******/


const Chordsheets = [
  {
    title: 'My Best Sheet',
    user_id: 1,
    chords: [
      { 0: -1, 1: 2, 2: 2, 3: 1, 4: 0, 5: 0, name: 'Chord Name' },
      { 0: 0, 1: 0, 2: 0, 3: 2, 4: 3, 5: 2, name: 'Chord Name' },
      { 0: 0, 1: 0, 2: 0, 3: 2, 4: 3, 5: 2, name: 'Chord Name' },
      { 0: 0, 1: 0, 2: 0, 3: 2, 4: 3, 5: 2, name: 'Chord Name' }
    ]
  }
]

export default Chordsheets;
