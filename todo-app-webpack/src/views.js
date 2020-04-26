import { getFilters } from './filters'
import { getTodos, removeTodo, saveTodos, toggleTodo } from './todos'

// renderTodos
// Arguments: none
// Render application todos based on filters
const renderTodos = () => {
  // grab #todos element
  const todoEl = document.querySelector('#todos')
  // grab all filters
  const { searchText, hideCompleted } = getFilters()
  // look through all todos
  // we grab all the todos
  const filteredTodos = getTodos().filter(todo => {
    // make todo text lower case
    const searchTextMatch = todo.text
      .toLowerCase()
      // make filters lower case and see if the filter matches
      .includes(searchText.toLowerCase())
    const hideCompletedMatch = !hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed)

  todoEl.innerHTML = '' // empty the todoEl contents
  todoEl.appendChild(generateSummaryDOM(incompleteTodos))

  // do we have any todos?
  if (filteredTodos.length > 0) {
    // generate UI for each todo
    filteredTodos.forEach(todo => {
      todoEl.appendChild(generateTodoDOM(todo))
    })
  } else {
    // no todos so let end user know
    const messageEl = document.createElement('p')
    messageEl.classList.add('empty-message')
    messageEl.textContent = 'There are no to-dos to show'
    todoEl.appendChild(messageEl)
  }

  // Return value: none
}

// generateTodoDOM
// Arguments: todo
const generateTodoDOM = todo => {
  // Get the DOM elements for an individual note
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id)
  })

  // Setup the todo text
  todoText.textContent = todo.text
  containerEl.appendChild(todoText)

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  // Setup the remove button
  removeButton.textContent = 'remove'
  removeButton.classList.add('button', 'button--text')
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    renderTodos()
  })

  // Return value: the todo element
  return todoEl
}

// Get the DOM elements for list summary
// Arguments: incompletedTodos
const generateSummaryDOM = incompleteTodos => {
  // grab the h2
  const summary = document.createElement('h2')
  // pluralize if necessary
  const plural = incompleteTodos.length === 1 ? '' : 's'
  // add class for style
  summary.classList.add('list-title')
  // pupulate with pluralized message
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`

  // Return value: the summary element
  return summary
}

// Make sure to set up the exports
export { generateSummaryDOM, generateTodoDOM, renderTodos }
