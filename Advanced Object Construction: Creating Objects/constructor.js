function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

var fido = new Dog("Fido", "Mixed", 30);
var fluffy = new Dog("fluffy", "poodle", 38);
var spot = new Dog("Spot", "chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i <= dogs.length; i++) {
  var size = "small";
  if (dogs[i].weight > 10) {
    size = "large";
  }
  console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}
