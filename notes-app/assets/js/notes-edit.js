'use strict';

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note-button');
const dateElement = document.querySelector('#last-edited');
let notes = getSavedNotes();
const hash = location.hash;
const noteId = hash.substring(1);
let note = notes.find(note => {
  return note.id === noteId;
});

if (!note) {
  location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('change', e => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener('change', function(e) {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

// remove note button
removeElement.addEventListener('click', () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});

window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);

    let note = notes.find(note => note.id === noteId);

    if (note) {
      location.assign('/index.html');
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
