// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null

const product = 'Car';
console.log(product.split(''));

const otherProduct = new String('Bus');
console.log(otherProduct);

const number = 22;
console.log(number);

const otherNumber = new Number(11);
console.log(otherNumber);

const isSoccerFan = true;
console.log(isSoccerFan);

const isOtherSoccerFan = new Boolean(true);
console.log(isOtherSoccerFan);
