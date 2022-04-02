var randomLoc=Math.floor(Math.random()*5), location1 = randomLoc,
  location2 = location1+1,
  location3 = location2+1,
  guess, guesses = 0,
  hits = 0,
  isSunk = false;
while (isSunk == false) {
  guess = prompt("ready, aim,fire!(Enter a number b/w 0-6)");
  if (guess < 0 || guess > 6)
  {
    alert("Enter a valid cell number");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
      alert("HIT!");
      if (hits == 3) {
        isSunk = true;
        alert("You Sank my battleship!!");
      }
    }
    else{
    alert("MISS")
    }
  }
}
var statistic = "You took " + guesses + "  attempts to sank my battleship. And had a accuracy of " + (3 / guesses);
alert(statistic);
