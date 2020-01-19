let restaurant = {
  name: 'Wawa',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

// seatParty (takes the party size to be seated and adds that on to guestCount
// removeParty (takes the party size to be removed and subtracts that from guestCount)

console.log(restaurant);
restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
console.log(restaurant);
