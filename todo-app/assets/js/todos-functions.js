// fetch existing todos from localStorage
const getSavedTodos = function() {
  // Grab any todos from localStorage
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    // if there is something in todosJSON
    // Grab the string and turn it back into an object
    return JSON.parse(todosJSON);
  } else {
    // If there is nothing in localStorage under 'notes' return an empty array
    return [];
  }
};

// Save todos to localStorage
const saveTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
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

  const hideCompletedTodos = filteredTodos.filter(function(todo) {
    // if hideCompleted is false show all
    // else show only incomplete
    return filters.hideCompleted;
  });

  // find out how many todos still need to be completed
  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  // clear before each new render
  document.querySelector('#todos').innerHTML = '';
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  // iterate through incomplete todos
  filteredTodos.forEach(function(todo) {
    // const p = generateTodoDOM(todo);
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

const removeTodo = function(id) {
  // find a match of the id argument and the todo id
  const todoIndex = todos.findIndex(function(todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toggle the completed value for a given todo
const toggleTodo = function(id) {
  const todo = todos.find(function(todo) {
    return todo.id === id;
  });
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

const generateTodoDOM = function(todo) {
  // create checkbox, text  and button
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  // make input a checkbox
  checkbox.setAttribute('type', 'checkbox');
  // check checkbox is todo completed
  checkbox.checked = todo.completed;
  // add checkbox to DOM
  todoEl.appendChild(checkbox);

  // listen for checkbox getting checked
  checkbox.addEventListener('change', function() {
    // console.log('checked');
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  // add text inside todo
  todoText.textContent = todo.text;
  // attach the text to the DOM
  todoEl.appendChild(todoText);
  // add X text for delete button
  removeButton.textContent = 'x';
  removeButton.addEventListener('click', function() {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  // Attach button to DOM
  todoEl.appendChild(removeButton);
  // return the created DOM stuff
  return todoEl;
};

const generateSummaryDOM = function(incompleteTodos) {
  const summary = document.createElement('h2');
  // Give h1 content
  summary.textContent = `You have ${incompleteTodos.length} todos left to complete`;
  return summary;
};
