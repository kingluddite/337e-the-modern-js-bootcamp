'use strict';
// fetch existing todos from localStorage
const getSavedTodos = () => {
  // Grab any todos from localStorage
  const todosJSON = localStorage.getItem('todos');

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Render Todos to browser
const renderTodos = (todos, filters) => {
  // filter todos to find matches to search
  let filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  filteredTodos = todos.filter(todo => {
    if (filters.hideCompleted) {
      return !todo.completed;
    } else {
      return true;
    }
  });

  const hideCompletedTodos = filteredTodos.filter(
    todo => filters.hideCompleted
  );

  // find out how many todos still need to be completed
  const incompleteTodos = filteredTodos.filter(todo => !todo.completed);

  // clear before each new render
  document.querySelector('#todos').innerHTML = '';
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  // iterate through incomplete todos
  filteredTodos.forEach(todo => {
    // const p = generateTodoDOM(todo);
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

const removeTodo = id => {
  // find a match of the id argument and the todo id
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toggle the completed value for a given todo
const toggleTodo = id => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const generateTodoDOM = todo => {
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
  checkbox.addEventListener('change', () => {
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
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  // Attach button to DOM
  todoEl.appendChild(removeButton);
  // return the created DOM stuff
  return todoEl;
};

const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement('h2');
  // Give h1 content
  summary.textContent = `You have ${incompleteTodos.length} todos left to complete`;
  return summary;
};
