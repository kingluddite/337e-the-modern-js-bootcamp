class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }

  set fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, company, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
    this.company = company;
  }
  getBio() {
    return `${this.fullName} in the ${this.position} department  at ${this.company}`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  checkPassing(grade) {
    if (grade > 70) {
      return 'passing';
    } else {
      return 'failing';
    }
  }
  getBio() {
    return `${this.firstName} is ${this.checkPassing(this.grade)}`;
  }
  updatedGrade(gradePoints) {
    return (this.grade = this.grade + gradePoints);
  }
}

const myEmployee = new Employee('Bobby', 'Fischer', 21, 'Chess Master', [
  'Chess',
]);
myEmployee.fullName = 'George Washington';
console.log(myEmployee.getBio());
// create an instance of PersonClass
// const myPerson = new Employee('John', 'Doe', 33, 'IT', 'IBM', [
//   'Developer',
//   'Soccer',
// ]);
// myPerson.fullName('George Washington');
// myPerson.setName('Jane Doe');
// console.log(myPerson.getBio());
// console.log(myPerson.getYearsLeft());
// const myPerson2 = new Person('John', 'Doe', 33, ['Developer', 'Soccer']);
// myPerson2.setName('Pip');
// console.log(myPerson2.getBio());
// console.log(myPerson2.getYearsLeft());
// const Person = function(firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };
//
// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} is ${this.age}.`;
//
//   this.likes.forEach(function(like) {
//     bio += ` ${this.firstName} likes ${like}.`;
//   });
//   return bio;
// };
//
// Person.prototype.setName = function(fullName) {
//   const names = fullName.split(' ');
//   this.firstName = names[0];
//   this.lastName = names[1];
// };
//
// const john = new Person('John', 'Doe', 30, ['Teaching', 'Soccer']);
// const jane = new Person('Jane', 'Doe', 25);
//
// john.getBio = function() {
//   return 'This is fake!';
// };
//
// john.setName('Gary Coleman');
// console.log(john.getBio());
// console.log(jane.getBio());
