let name = 'John Doe';

// Length property
console.log(name.length); // 8

// toUpperCase() method
console.log(name.toUpperCase()); // JOHN DOE
// toLowerCase() method
console.log(name.toLowerCase()); // john doe

// includes()
console.log(name.includes('Doe')); // true

let password = '123password465';
console.log(password.includes('password'));

// trim() method
let extraSpacesPassword = '   123456   ';
console.log(extraSpacesPassword.trim());

// challenge
console.log('******Challenge******');
let isValidPassword1 = function(pwd) {
  // check if length > 8
  let message;
  let trimPwd = pwd.trim();
  if (trimPwd.length <= 8) {
    message = 'Passwords must be greater than 8 characters';
  } else if (trimPwd.includes('password')) {
    message = 'Passwords can not contain the word password';
  } else {
    message = 'User logged in.';
  }
  return message;
};

let isValidPassword = function(password) {
  let trimPassword = password.trim();
  return trimPassword.length > 8 && !trimPassword.includes('password');
};

console.log(isValidPassword('123        '));
console.log(isValidPassword('abc123aaaaaaad'));
console.log(isValidPassword(''));
console.log(isValidPassword('abcpassword123'));

// another way to write this
let isValidPassword2 = function(password) {
  if (trimPassword.length > 8 && !trimPassword.includes('password')) {
    return true;
  } else {
    return false;
  }
};
