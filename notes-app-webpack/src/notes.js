import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

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
}

export { getNotes, createNote }
