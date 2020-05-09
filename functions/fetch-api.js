fetch('http://puzzle.mead.io/puzzle', {})
  .then(response => {
    if (response.status === 200) {
      // good
      return response.json();
    } else {
      // bad
      throw new Error('Unable to fetch for the puzzle');
    }
  })
  .then(data => {
    console.log(data.puzzle);
  })
  .catch(error => {
    console.log(error);
  });
