// Callback
const getDataCallback = cb => {
  setTimeout(() => {
    cb('This is my callback error', undefined);
    cb('This is my callback error', undefined);
    // cb(undefined, 'This is the callback data');
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
    console.log('Woops!');
  } else {
    console.log(data);
  }
});

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise Error');
    reject('Promise Error');
    // resolve('This is the promise data');
  }, 2000);
});

myPromise.then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);

myPromise.then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);
