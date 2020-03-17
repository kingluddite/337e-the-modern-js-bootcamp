const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach(function(like) {
    bio += ` ${this.firstName} likes ${like}.`;
  });
  return bio;
};

Person.prototype.setName = function(fullName) {
  const names = fullName.split(' ');
  this.firstName = names[0];
  this.lastName = names[1];
};

const john = new Person('John', 'Doe', 30, ['Teaching', 'Soccer']);
const jane = new Person('Jane', 'Doe', 25);

john.getBio = function() {
  return 'This is fake!';
};

john.setName('Gary Coleman');
console.log(john.getBio());
console.log(jane.getBio());
