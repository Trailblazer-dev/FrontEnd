let cardOne = 7;
let cardTwo = 12;
let sum = cardOne + cardTwo;
let cardThree = 7;
sum += cardThree;
if (sum > 21) {
    console.log("You lost");
    //process.exit(1);    
}
console.log(`You have ${sum} points`);
function displayDone(){
    console.log("Done");
}
setTimeout(displayDone, 300);
//There is alternative method of using anaomous function
setTimeout(
    function(){
    console.log("Done")
}, 3000);
//THese it the most simplest way
setTimeout(() => {//=> operator indicates start of a function
    console.log("Done");    
}, 3400);