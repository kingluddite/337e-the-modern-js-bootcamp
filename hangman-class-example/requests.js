// const getPuzzle = (wordCount, cb) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       cb(undefined, data.puzzle);
//     } else if (e.target.readyState === 4) {
//       cb('An error has taken place', undefined);
//     }
//   });
//
//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// };
const getPuzzle = wordCount =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
        // cb(undefined, data.puzzle);
      } else if (e.target.readyState === 4) {
        reject('An error has taken place');
        // cb('An error has taken place', undefined);
      }
    });

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });

// const getCountry = (countryCode, cb) => {
//   const xhr = new XMLHttpRequest();
//
//   xhr.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       const country = data.find(country => country.alpha2Code === countryCode);
//       cb(undefined, country);
//     } else if (e.target.readyState === 4) {
//       cb('An error has taken place', undefined);
//     }
//   });
//
//   xhr.open('GET', 'http://restcountries.eu/rest/v2/all/');
//   xhr.send();
// };

const getCountry = countryCode =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find(
          country => country.alpha2Code === countryCode
        );
        resolve(country);
        // cb(undefined, country);
      } else if (e.target.readyState === 4) {
        reject(`an error has taken place`);
        // cb('an error has taken place', undefined);
      }
    });

    xhr.open('GET', 'http://restcountries.eu/rest/v2/all/');
    xhr.send();
  });
