/*******
chord_sheet table
id, chords, user_id, name_of_sheet
1, "[[E major,0,2,2,1,0,0], [chord_name,x,x,x,2,3,2]]", user_ id, name_of_sheet
*******/


const Chordsheets = [
  {
    user_id: 1,
    chords: [
      {0: -1, 1: 2, 2: 2, 3: 1, 4: 0, 5: 0 }
    ]
  },
  {
    user_id: 1,
    chords: [
      [0: 1, 1: 4, 2: 1, 3: 0, 4: -1, 5: 0 ],
      [0: 2, 1: 0, 2: 2, 3: 0, 4: -1, 5: 4 ],
      [0: 5, 1: 5, 2: 2, 3: 0, 4: -1, 5: 4 ]
    ]
  },
  {
    user_id: 1,
    chords: [
      [0: 3, 1: 2, 2: 2, 3: 0, 4: -1, 5: 4 ],
      [0: 3, 1: 2, 2: 2, 3: 0, 4: -1, 5: 4 ],
      [0: 3, 1: 2, 2: 2, 3: 0, 4: -1, 5: 4 ]
    ]
  },
  {
    user_id: 1,
    chords: [
      [0: 3, 1: 2, 2: 2, 3: 0, 4: -1, 5: 4 ],
      [0: 3, 1: 2, 2: 2, 3: 0, 4: -1, 5: 4 ],
      [0: 3, 1: 2, 2: 2, 3: 0, 4: -1, 5: 4 ]
    ]
  }
]

export default Chordsheets;
