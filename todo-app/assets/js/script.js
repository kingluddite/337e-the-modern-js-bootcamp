const todos = [
  { text: 'Lift weights', completed: true },
  { text: 'Pay Rent', completed: false },
  { text: 'Do Laundry', completed: false },
  { text: 'Code JavaScript', completed: false },
  { text: 'Run', completed: false },
];

// filters object
const filters = {
  searchText: '',
  hideCompleted: false,
};

// Render Todos to browser
const renderTodos = function(todos, filters) {
  // filter todos to find matches to search
  let filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  filteredTodos = todos.filter(function(todo) {
    if (filters.hideCompleted) {
      return !todo.completed;
    } else {
      return true;
    }
  });

  // find out how many todos still need to be completed
  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  const hideCompletedTodos = filteredTodos.filter(function(todo) {
    // if hideCompleted is false show all
    // else show only incomplete
    return filters.hideCompleted;
  });
  console.log(hideCompletedTodos);

  // clear before each new render
  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h2');
  // Give h1 content
  summary.textContent = `You have ${incompleteTodos.length} todos left to complete`;
  // A
  const header = document.querySelector('#todos').appendChild(summary);

  // iterate through incomplete todos
  filteredTodos.forEach(function(todo) {
    // create a p element
    const p = document.createElement('p');
    // Provide the content for the todo based on the todo object
    p.textContent = todo.text;
    // Add each todo to header
    document.querySelector('#todos').appendChild(p);
  });
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
      text: e.target.elements.text.value,
      completed: false,
    });
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
