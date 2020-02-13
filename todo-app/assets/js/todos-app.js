let todos = getSavedTodos();

// filters object
const filters = {
  searchText: '',
  hideCompleted: false,
};

// render todos on initial load
renderTodos(todos, filters);

// listen for new todo searches
document
  .querySelector('#todo-search-text')
  .addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
  });

// todo form submit listener
document
  .querySelector('#new-todo-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    todos.push({
      id: uuidv4(),
      text: e.target.elements.text.value,
      completed: false,
    });
    saveTodos(todos);
    // store in localStorage
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
  });

// hide completed todos
document
  .querySelector('#hide-completed-checkbox')
  .addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
