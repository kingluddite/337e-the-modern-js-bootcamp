const person = {
  name: 'Joe',
  age: 22,
};

person.age = 34;
// person = {};

// convert this to let or const
const gradeCalc = function(score, totalScore) {
  const percent = (score / totalScore) * 100;
  let letterGrade = '';

  if (percent >= 90) {
    letterGrade = 'A';
  } else if (percent >= 80) {
    letterGrade = 'B';
  } else if (percent >= 70) {
    letterGrade = 'C';
  } else if (percent >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return `You got a ${letterGrade} (${percent}%)!`;
};

const result = gradeCalc(9, 20);
console.log(result);
