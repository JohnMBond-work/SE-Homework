
// Math Logic for Alien Ship variables
class Ship {
  constructor() {
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }

  // Create an attack function, which generates a random number between 0 and 1 (Math.random()) and check it against ships accuracy. if the number is <= accuracy, the attack succeeds, otherwise it fails. --- done
  attack() {
    const chance = Math.random().toFixed(1);
    console.log("You're being attacked by the alien ship!")

    // Ask Salah if should be <= or >=, change below accordingly
    if (chance <= my_ship.accuracy) {
      my_ship.hull -= this.firepower;
      console.log('The alien successfully attacked your ship! You have ' + my_ship.hull + ' hit points left!')
    } else {
      console.log("The alien's attack was unsuccessful.")
    }
  }


}

// USS Shwarzenegger variables
var my_ship = {
  name: 'USS Shwarzenegger',
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  attack: function() {
    const chance = Math.random().toFixed(1);

    console.log('The USS Shwarzenegger is attacking the alien ship!')

    // Ask Salah if should be <= or >=, change below accordingly
    if (chance <= my_ship.accuracy) {
      aliens[0].hull -= my_ship.firepower;
      console.log('Success!! The USS Shwarzenegger hit the alien ship! The alien ship suffered ' + my_ship.firepower + ' points of damange to their hull!');
      return true;
    } else {
      console.log("The USS Shwarzenegger's attack was unsuccessful.")
      return false;
    }
  }
}

var aliens = []

// Future feature: prompt user to play again, ask for number of ships to face, call this function with that number.
function resetAlienFleet(num) {
  aliens = [];

  for (var i = 1; i <= num; i++) {
    aliens.push(new Ship());
  }
}

function startGame() {

  resetAlienFleet(6)

  while (aliens.length > 0 && my_ship.hull > 0) {

    if(my_ship.attack() === true) {
      if (aliens[0].hull > 0) {
        aliens[0].attack();
        console.log('The alien ship still has ' + aliens[0].hull + '  hit points left.');
      } else {
        aliens.shift();
        console.log("The USS Shwarzenegger blew up the alien's ship!");

// Prompt for ATTACK or RETREAT option
        if (aliens.length > 0) {
          let user_input = prompt("The USS Shwarzenegger has " + my_ship.hull + "hit points left. Would you like to attack the next ship, or retreat? (If you retreat, you forfeit the game.) \n Please type 'attack' or 'retreat' in the text box below to continue.");

          if (user_input == 'retreat') {
            break;
          }
        }
      }
    } else {
      aliens[0].attack();
    }
  }
// End of game popup message possibilities
  if (aliens.length == 0) {
    alert('The USS Shwarzenegger has successfully destroyed all of the alien ships! Congratulations!')
    console.log("The USS Shwarzenegger has successfully destroyed all of the alien ships! Congratulations!");
  } else if (my_ship.hull <= 0) {
    alert('The USS Shwarzenegger was destroyed by the alien fleet. Better luck next time!')
    console.log("The USS Shwarzenegger was destroyed by the alien fleet. Better luck next time!");
  } else {
    alert('The USS Shwarzenegger retreated! The battleground is forfeit! You lose.')
    console.log("The USS Shwarzenegger retreated! The battleground is forfeit! You lose.");
  }

}
