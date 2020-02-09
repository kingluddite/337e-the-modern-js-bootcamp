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

const filters = {
  searchText: '',
};

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    // find if note contains filter text
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  // clear all notes from last search
  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('#notes').appendChild(noteEl);
  });
};

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// change create note button text
document.querySelector('#create-note').addEventListener('click', function(e) {
  e.target.textContent = 'first button text changed';
});

document
  .querySelector('#create-note')
  .addEventListener('dblclick', function(e) {
    e.target.textContent = 'Create Note';
  });

document
  .querySelector('#note-checkbox')
  .addEventListener('change', function(e) {
    console.log(e.target.checked);
  });
