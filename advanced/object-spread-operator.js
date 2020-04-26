// ## IMPORTANT - you need to update babel with new plugin to make this work

// const house = {
//   bedrooms: 4,
//   bathrooms: 2.5,
//   garage: true,
//   yearBuilt: 1970,
// }
//
// const newHouse = {
//   basement: true,
//   ...house,
//   washer: true,
//   dryer: true,
// }
// newHouse.dryer = false
// newHouse.yearBuilt = 2000
// console.log(house)
// console.log(newHouse)

// ## Challenge
// * Create a person object with name and age
// * Create a location object with city and country
// * create a new overview object and use the spread operator to add all 4 properties from both objects

const person = {
  name: 'John Doe',
  age: 33,
};
const location = {
  city: 'LA',
  country: 'USA',
};
const overview = {
  ...person,
  ...location,
};
console.log(overview);
