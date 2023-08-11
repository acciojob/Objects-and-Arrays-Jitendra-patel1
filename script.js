const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const team=players
const team1=[];
for(int i=0; i<players.length; i++){
	cap1.push(players[i]);
}

function copyObject(source) {
  const copy = {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      copy[key] = source[key];
    }
  }
  return copy;
}

const cap1 = copyObject(person);


// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
