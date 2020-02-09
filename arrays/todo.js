// challenge
// list of 5 todos
const todos = [
  { text: 'Lift weights', completed: true },
  { text: 'Pay Rent', completed: false },
  { text: 'Do Laundry', completed: true },
  { text: 'Code JavaScript', completed: false },
  { text: 'Run', completed: true },
];

const deleteTodo = function(todosArr, todoText) {
  const index = todosArr.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todosArr.splice(index, 1);
  }
};

deleteTodo(todos, 'Paya Rent');

// console.log(todos);

const findIncompleteTodos = function(todos) {
  return todos.filter(function(todo, index) {
    // return (isMatch = todo.completed === false);
    // above doens't need to store inside variable
    // easier to use below
    // return todo.completed === false;
    return !todo.completed;
  });
};

const incompletedTodos = findIncompleteTodos(todos);
// console.log(incompletedTodos);

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (a.completed === false && b.completed) {
      return -1;
    } else if (b.completed === false && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);
