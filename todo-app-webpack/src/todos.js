import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
const loadTodos = () => {
  // Read existing notes from localStorage
  const todosJSON = localStorage.getItem('todos')

  try {
    todos = todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    todos = []
  }
  // Return value: none
}

// getTodos
// Arguments: none
// Return value: todos array
// Expose todos from module
const getTodos = () => todos

// set todos to what's in localStorage or if empty keep array empty
// todos = loadTodos()
loadTodos()

// Save the todos to localStorage
// Arguments: none
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))

  // Return value: none
}

// createTodo
// Arguments: todo text
const createTodo = text => {
  const id = uuidv4()
  const timestamp = moment().valueOf()

  todos.push({
    id: uuidv4(),
    text,
    completed: false,
    createdAt: timestamp,
    updatedAt: timestamp,
  })
  saveTodos(todos)

  // Return value: none
}

// Remove todo by id
// Arguments: id of todo to remove
const removeTodo = id => {
  // search all todos to find an id that matches
  const todoIndex = todos.findIndex(todo => todo.id === id)

  // if you find a match
  if (todoIndex > -1) {
    // remove that todo from the todos array
    todos.splice(todoIndex, 1)
    savedTodos()
  }
  // Return value: none
}

// toggleTodo
// Arguments: id of todo to toggle
// Toggle the completed value for a given todo
const toggleTodo = id => {
  // search the todos array to find a match by id
  const todo = todos.find(todo => todo.id === id)

  // if you find a match
  if (todo) {
    // toggle the completed boolean value
    todo.completed = !todo.completed
    saveTodos()
  }
  // Return value: none
}

// Make sure to call loadTodos and setup the exports
export { loadTodos, getTodos, saveTodos, createTodo, removeTodo, toggleTodo }
