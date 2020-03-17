// const myAge = 17;
// let message = myAge >= 18 ? 'You can vote' : 'You can not vote';
// console.log(message);

// const myAge = 21;
// const showPage = () => {
//   return 'Show Page';
// };
// const showErrorPage = () => {
//   return 'Show Error Page';
// };
// const message = myAge >= 21 ? showPage() : showErrorPage();
// console.log(message);

const team = ['John', 'Mike', 'Jill', 'Jan', 'Bill'];
const teamSize = team => `Team Size: ${team.length}`;
const teamTooBig = () => `Too many people on your team`;

const message = team.length <= 4 ? teamSize(team) : teamTooBig();
console.log(message);
