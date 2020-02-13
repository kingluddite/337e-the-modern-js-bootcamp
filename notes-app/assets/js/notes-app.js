console.log(uuidv4());
let notes = getSavedNotes();

const filters = {
  searchText: '',
};

renderNotes(notes, filters);

// Event Listeners
document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// change create note button text
document.querySelector('#create-note').addEventListener('click', function(e) {
  // e.target.textContent = 'first button text changed';
  const id = uuidv4();
  notes.push({
    id,
    title: '',
    body: '',
  });

  saveNotes(notes);
  location.assign(`/edit-note.html#${id}`);
});

document
  .querySelector('#filter-by-select')
  .addEventListener('change', function(e) {
    console.log(e.target.value);
  });

// check for any localStorage updates
window.addEventListener('storage', function(e) {
  notes = JSON.parse(e.newValue);
  saveNotes(notes);
  renderNotes(notes, filters);
});
