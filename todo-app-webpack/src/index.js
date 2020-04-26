import reset from './assets/scss/reset.scss'
import css from './assets/scss/index.scss'

// Add necessary imports
import { getFilters, setFilters, getTodos } from './filters'
import { loadTodos, createTodo, removeTodo, toggleTodo } from './todos'
import { renderTodos } from './views'

console.log('Hello from webpack!')

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', e => {
  setFilters({
    searchText: e.target.value,
  })
  renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', e => {
  // filters.hideCompleted = e.target.checked;
  setFilters({
    hideCompleted: e.target.checked,
  })
  renderTodos()
})

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', e => {
  e.preventDefault()
  // grab the text from the form field
  // debugger
  let text = e.target.elements.text.value.trim()

  // check for at least one character submitted in form field
  if (text.length > 0) {
    // create a todo and pass it the user text
    createTodo(text)
    // render todos
    renderTodos()
    // clear form
    e.target.elements.text.value = ''
  } else {
    // alert('please enter a note before submitting')
  }
})
// Bonus: Add a watcher for local storage
window.addEventListener('storage', e => {
  if (e.key === 'todos') {
    loadTodos()
    renderTodos()
  }
})
