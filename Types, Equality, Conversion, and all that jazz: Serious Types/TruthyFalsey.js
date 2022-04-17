
function lieDetectorTest(){
var lies =0;

var stolenDiamond={};
if(stolenDiamond){
console.log("You Stole the diamond");
lies++;
}
var car= {
keysInPocket: null
};
if (car.keysInPocket){
console.log("Uh oh, guess you stole the car");
lies++
}
if (car.emptyGasTank)
{
console.log("You drove the car after you stole it");
lies++
}
var foundYouAtTheCrimeScene = [];
if(foundYouAtTheCrimeScene)
{
console.log("A Sure sign of Guilt");
lies++;
}
if(foundYouAtTheCrimeScene[0]){
console.log("Caught with the Stole ITEM !");
lies++;
}
var yourName = " ";
if(yourName)
{
console.log("Gues you lied about your name");
lies++;
}
return lies;
}

var numberOfLies = lieDetectorTest();
console.log(" You told " + numberOfLies+ " Lies !");

if (numberOfLies >=3){
console.log("Charge of Guilt");
}
