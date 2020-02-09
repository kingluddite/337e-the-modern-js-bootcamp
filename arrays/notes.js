const notes = [
  {
    title: 'Go to gym',
    body: 'Work out shoulders',
  },
  {
    title: 'Go to gym',
    body: 'work out arms',
  },
  {
    title: 'Go to school',
    body: 'Teach a good class',
  },
  {
    title: 'do homework',
    body: 'Write lots of JavaScript',
  },
];

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const filteredNotes = notes.filter(function(note, index) {
  // inside here we return a boolean
  // if true, keep the item inside the new array we are generating
  // if false, keep the item out of the new array we are generating
  // Remember this creates a new array, it does not change the original array
  //  So you can store this new array in a new variable
  const isTitleMatch = note.title.toLowerCase().includes('gym');
  const isBodyMatch = note.body.toLowerCase().includes('gym');
  if (isTitleMatch || isBodyMatch) {
    return true;
  }
});

const findNotes = function(notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    // if (isTitleMatch || isBodyMatch) {
    //   return true;
    // }
    return isTitleMatch || isBodyMatch;
  });
};

// const gymNotes = findNotes(notes, 'to');
// console.log(gymNotes);

// const findNote = function(notes, noteTitle) {
//   // here we check if there is a match (index) or no match -1
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   // the above return, returns the value to `index` variable
//   // we then use our index (either -1 or the found index)
//   // array[-1] returns undefined
//   // we then return to findNote the array item found (notes[index])
//   return notes[index];
// };

const findNote = function(notes, noteTitle) {
  // here we check if there is a match (index) or no match -1
  return notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

// const note = findNote(notes, 'To bE Or Not TO be');
// console.log(note);

sortNotes(notes);
console.log(notes);
