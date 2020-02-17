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

// get representation of current point in time with moment js
// const now = moment();
// now
//   .year(2020)
//   .month(10)
//   .date(13);
// console.log(now.format('MMMM Do, YYYY')); // Tue Jan 26 2021 17:25:38 GMT-0800
// console.log(now.fromNow());
// console.log(now.valueOf());

// get representation of current point in time with moment js
// const then = moment();
// then
//   .year(1999)
//   .month(11)
//   .date(31);
// console.log(then.format('MMMM Do, YYYY')); // Tue Jan 26 2021 17:25:38 GMT-0800
// console.log(then.fromNow());
// const princeAndTheRevolutionTimestamp = then.valueOf();
// console.log(moment(princeAndTheRevolutionTimestamp).toString());

const coolGuyBirthday = moment()
  .month(6)
  .date(1)
  .year(1980);
// console.log(coolGuyBirthday.toString());
console.log(coolGuyBirthday.format('MMMM Do, YYYY'));
