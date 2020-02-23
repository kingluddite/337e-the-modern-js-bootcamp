let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited',
};

renderNotes(notes, filters);

// change create note button text
document.querySelector('#create-note').addEventListener('click', function(e) {
  // e.target.textContent = 'first button text changed';
  const id = uuidv4();
  const timestamp = moment().valueOf();

  notes.push({
    id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  saveNotes(notes);
  location.assign(`/edit-note.html#${id}`);
});

// Event Listeners
document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document
  .querySelector('#filter-by-select')
  .addEventListener('change', function(e) {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
  });

// check for any localStorage updates
window.addEventListener('storage', function(e) {
  notes = JSON.parse(e.newValue);
  saveNotes(notes);
  renderNotes(notes, filters);
});
