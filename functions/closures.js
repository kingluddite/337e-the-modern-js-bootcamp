const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
counter.count = 0;
// console.log(counter)// ;

// Adder
// const createAdder = a => {
//   return b => {
//     return a + b;
//   };
// };
// const add10 = createAdder(10);
// console.log(add10(-2)); // 8
// console.log(add10(20)); // 30
// const add100 = createAdder(100);
// console.log(add100(-90)); // 10

// Tipper
const createTipper = baseTip => {
  return amount => {
    return (amount * baseTip) / 100;
  };
};
const tipFifteen = createTipper(15);
console.log(tipFifteen(100)); // 15
const tipTwenty = createTipper(20);
console.log(tipTwenty(100)); // 20
const tipTwentyFive = createTipper(25);
console.log(tipTwentyFive(100)); // 25
