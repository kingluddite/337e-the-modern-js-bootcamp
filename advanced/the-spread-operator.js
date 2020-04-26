const printTeam = (teamName, coach, ...players) => {
  console.log(`Team Name: ${teamName}`);
  console.log(`Coach Name: ${coach}`);
  console.log(`Player Names: ${players.join(', ')}`);
};

const team = {
  name: 'Man U',
  coach: 'John Doe',
  players: ['Manny', 'Moe', 'Jack'],
};

// printTeam('Man U', 'John Doe', 'Manny', 'Moe', 'Jack');
printTeam(team.name, team.coach, ...team.players);

// array of cities
let cities = ['Philly', 'LA', 'Clemson', 'Arlington'];
cities = [...cities, 'Dublin', 'Killasser'];
console.log(cities);
