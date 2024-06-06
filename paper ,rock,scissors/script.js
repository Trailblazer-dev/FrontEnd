`use strict';`;
const clearBtn = document.querySelector(".reset-btn");
const compImage = document.querySelectorAll(".comp-img");
const playerImage = document.querySelectorAll(".player-img");
const compPoint = document.querySelector(".computerScore span");
const playerPoint = document.querySelector(".playerScore span");
const winner = document.querySelector(".winner");
const images = ["./img/fist.png", "./img/hand-paper.png", "./img/scissors.png"];
clearBtn.style.display = "none";
let computerPoint = 0;
let playerPoints = 0;
//I need to create a computer random picker
function createRandom() {
  return Math.floor(Math.random() * images.length);
}
let computerChoice;
let playerChoice;
function rockBtn() {
  playerChoice = 0;
  computerChoice = createRandom() - 1;
  img(playerChoice, computerChoice);
  game(playerChoice, computerChoice);
}
function paperBtn() {
  playerChoice = 1;
  computerChoice = createRandom()-1;
  img(playerChoice, computerChoice);
  game(playerChoice, computerChoice);
}
function scissorsBtn() {
  playerChoice = 2;
  computerChoice = createRandom()-1;
  img(playerChoice, computerChoice);
  game(playerChoice, computerChoice);
}
function img(playerimg, compimg) {
   compImage.forEach(element => {
    element.srcset = images[compimg];    
  });
  playerImage.forEach(element => {
    element.srcset = images[playerimg];
  });
}

function game(player, computer) {
  if (player === computer) {
    winner.innerHTML = "Tie";
    computerPoint += 3;
    playerPoints += 3;
    compPoint.innerHTML = computerPoint;
    playerPoint.innerHTML = playerPoints;
  } else if (
    (player == 0 && computer == 2) ||
    (player == 2 && computer == 1) ||
    (player == 1 && computer == 0)
  ) {
    winner.innerHTML = "Player Win";
    computerPoint += 0;
    playerPoints += 3;
    compPoint.innerHTML = computerPoint;
    playerPoint.innerHTML = playerPoints;
  } else {
    winner.innerHTML = "Computer Win";
    computerPoint += 3;
    playerPoints += 0;
    compPoint.innerHTML = computerPoint;
    playerPoint.innerHTML = playerPoints;
  }
  endgame();
}

const gameBtn = document.querySelector(".game-btn");
const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissor-btn");
rock.addEventListener("click", rockBtn);
paper.addEventListener("click", paperBtn);
scissors.addEventListener("click", scissorsBtn);
const clean = () => {
  gameBtn.style.display = "none";
  clearBtn.style.display = "block";
};
function endgame() {
  if (computerPoint == 9) {
    clean();
    return (winner.innerHTML = "Computer Wins... Game is over!");
  }
  if (playerPoints == 9) {
    clean();
    return (winner.innerHTML = "Player Wins... Game is over!");
  }
}
clearBtn.addEventListener("click", clear);
function clear() {
  let originalImg = (array)=>{
    const img =["./img/rock-paper-scissors-big.png","./img/rock-paper-scissors-medium.png","./img/rock-paper-scissors-smaller.png","./img/rock-paper-scissors-small.png"];
    for(var i=0; i<array.length-1; i++){
      array[i].srcset = img[i];
    }
  }
  compImage.srcset =originalImg(compImage);
  playerImage.srcset =originalImg(playerImage);
  winner.innerHTML = "";
  computerPoint = 0;
  playerPoints = 0;
  compPoint.innerHTML = computerPoint;
  playerPoint.innerHTML = playerPoints;
  gameBtn.style.display = "block";
  clearBtn.style.display = "none";
}
//End of game section

const option = document.querySelector(".nav-item .op");
option.addEventListener("click", () => {
  const section = document.querySelector(".option");
  section.style.display = "block";
});
const about = document.querySelector(".nav-item .us");
about.addEventListener("click", () => {
  const section = document.querySelector(".about");
  section.style.display = "block";
});
