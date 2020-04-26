const data = {
  locations: [],
  get firstName() {
    // What goes inside here?
    //   Us returning the value we actually want to send back (that value the user should get when they try to read the property)
    return this._firstName;
  },
  set firstName(value) {
    value = value.trim().toUpperCase();
    this._firstName = value.trim().toUpperCase();
    this.locations.push(this._firstName);
  },
};

data.firstName = '    Diego    ';
console.log(data.locations);
data.firstName = '    Pele    ';
console.log(data.locations);
data.firstName = '    Ronaldo    ';
console.log(data.locations);
