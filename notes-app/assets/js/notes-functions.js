// Read existing notes from localStorage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const removeNote = function(id) {
  const noteIndex = notes.findIndex(function(note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate DOM structure for a Note
const generateNoteDOM = function(note) {
  const id = note.id;
  const noteEl = document.createElement('div');
  // Make it an anchortag
  const textEl = document.createElement('a');
  const button = document.createElement('button');

  // Setup the remove note button
  button.textContent = 'x';
  noteEl.appendChild(textEl);
  button.addEventListener('click', function() {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Set up the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed Note';
  }
  // link to edit-note page and send note id in URL
  textEl.setAttribute('href', `/edit-note.html#${id}`);
  noteEl.appendChild(button);
  return noteEl;
};

// Save the notes to localStorage
const saveNotes = function(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Sort your notes by one of three ways
const sortNotes = function(notes, sortBy) {
  if (sortBy === 'byEdited') {
    return notes.sort(function(a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort(function(a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
    return notes.sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// Render application notes
const renderNotes = function(notes, filters) {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(function(note) {
    // find if note contains filter text
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  // clear all notes from last search
  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};

// Generate the last edited message
const generateLastEdited = function(timestamp) {
  return `Last edited ${moment(note.updatedAt).fromNow()}`;
};
