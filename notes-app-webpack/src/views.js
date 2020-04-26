import moment from 'moment'
import { sortNotes, getNotes } from './notes'
import { getFilters } from './filters'

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }

  noteEl.classList.add('list-item__title')
  noteEl.appendChild(textEl)

  // Setup the link
  noteEl.setAttribute('href', `/edit-note.html#${note.id}`)
  noteEl.classList.add('list-item')

  // Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)

  return noteEl
}

// Render application notes
const renderNotes = () => {
  // store notes element as we use it more than once
  const notesEl = document.querySelector('#notes')
  const filters = getFilters()
  const notes = sortNotes(filters.sortBy)
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  )

  // empty notes element
  notesEl.innerHTML = ''

  // are there any notes?
  if (filteredNotes.length > 0) {
    // if there are notes, filter through them
    filteredNotes.forEach((note) => {
      // create a note
      const noteEl = generateNoteDOM(note)
      // add the note to the notels element
      notesEl.appendChild(noteEl)
    })
  } else {
    // no notes so create a paragraph element
    const emptyMessage = document.createElement('p')
    // set the text to alert the user there are not notes
    emptyMessage.textContent = 'There are no notes. Please add one to begin'
    // add a class
    emptyMessage.classList.add('empty-message')
    // add the paragraph of text to the notes element
    notesEl.appendChild(emptyMessage)
  }
}

const initializeEditPage = (noteId) => {
  const titleElement = document.querySelector('#note-title')
  const bodyElement = document.querySelector('#note-body')
  const dateElement = document.querySelector('#last-edited')
  const notes = getNotes()
  const note = notes.find((note) => note.id === noteId)

  if (!note) {
    location.assign('/index.html')
  }

  titleElement.value = note.title
  bodyElement.value = note.body
  dateElement.textContent = generateLastEdited(note.updatedAt)
  return note
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }
