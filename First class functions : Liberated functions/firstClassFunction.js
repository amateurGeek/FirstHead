var passengers = [{
    name: "Jane Doloop",
    paid: true
  },
  {
    name: "Dr. Evel",
    paid: true
  },
  {
    name: "Abc",
    paid: false
  },
  {
    name: "def",
    paid: true
  }
];

function processPassenger(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger){
return (passenger.name==="Dr. Evel");
}

function checkNotPaid(passenger){
return(!passenger.paid);
}
function printPassenger(passenger){
var message = passenger.name;
if(passenger.paid == true){
message = message + " has paid";
}
else {
message =message + " has not paid";
}
console.log(message);
return false;
}

var allCanFly = processPassenger(passengers, checkNoFlyList);
if(!allCanFly){
console.log("We have a passanger from No-Fly List")
}

var allPaid = processPassenger(passengers, checkNotPaid);
if(!allPaid){
console.log("Not Everyone has paid!! Cannot Fly");
}

processPassenger(passengers, printPassenger);
