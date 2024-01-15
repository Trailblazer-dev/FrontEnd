//As a newly hired game developer, you've been tasked with building recreational games for the web. Your first assignment is to start working on the card game Texas Hold'em. Instead of having players bet money, you'll use points to represent poker chips
const STARTINGPOKERCHIPS = 100 ;
const PLAYERS = 3 ;
const NOOFSTARTERCARDS = 2 ;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

let playerOnepoints = STARTINGPOKERCHIPS;
let playerTwopoints = STARTINGPOKERCHIPS;
let playerThreepoints = STARTINGPOKERCHIPS;

console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players ${playerOneName}, ${playerTwoName} and ${playerThreeName}. Each player has ${STARTINGPOKERCHIPS} in their pots. We have an exciting game ahead of us. May the best player win!`);

//with Time I will add something here between

gameHasEnded = ((playerOnepoints + playerTwopoints) == 0) || // three has one
               ((playerTwopoints + playerThreepoints) == 0) ||  // one has won
               ((playerOnepoints + playerThreepoints) == 0);  // two has won
console.log("Game had Ended: ", gameHasEnded)