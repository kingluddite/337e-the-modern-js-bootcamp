import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import validator from 'validator'

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// Expose notes from module
const getNotes = () => notes

// set notes to what's in localStorage or if empty keep array empty
notes = loadNotes()

// Save the notes to localStorage
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Create a note
const createNote = () => {
  const id = uuidv4()
  const timestamp = moment().valueOf()

  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp,
  })
  saveNotes()
  return id
}

// Remove a note
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
    saveNotes()
  }
}

// Sort your notes by one of three ways
const sortNotes = (sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id)
  const title = updates.title

  // if note not found
  if (!note) {
    // leave the function
    return
  }

  // note found
  // does title exist and is a string?
  if (typeof updates.title === 'string') {
    // update title
    note.title = title
    note.updatedAt = moment().valueOf()
  }

  // does body exist and is a string?
  if (typeof updates.body === 'string') {
    // update body
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  // save the note
  saveNotes()
  return note
}

export { getNotes, createNote, saveNotes, removeNote, sortNotes, updateNote }
