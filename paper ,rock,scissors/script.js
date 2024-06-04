`use strict';`
const compImage =document.querySelector('.comp-img');
const playerImage = document.querySelector('.player-img');
const compPoint= document.querySelector('.computerScore span');
const playerPoint = document.querySelector('.playerScore span');
const winner= document.querySelector('.winner');
const images=["./img/fist.png","./img/hand-paper.png","./img/scissors.png"];
let computerPoint=0;
let playerPoints=0;
//I need to create a computer random picker
function createRandom(){
    return Math.floor(Math.random() * images.length);
}
let computerChoice ;
let playerChoice;
function rockBtn(){
    playerChoice = 1;
    computerChoice = createRandom();
    img(playerChoice,computerChoice);
    game(playerChoice,computerChoice);
}
function paperBtn(){
    playerChoice = 2;
    computerChoice = createRandom();
    img(playerChoice, computerChoice);
    game(playerChoice,computerChoice);
}
function scissorsBtn(){
    playerChoice = 3;
    computerChoice = createRandom();
    img(playerChoice, computerChoice);
    game(playerChoice,computerChoice);
}
function img(playerimg,compimg){
    compImage.src = images[compimg-1];   
    playerImage.src = images[playerimg-1];    
    
}

function game(player,computer){
    if(player === computer){
        winner.innerHTML = "Tie";
        computerPoint +=3;
        playerPoints +=3;
        compPoint.innerHTML = computerPoint;
        playerPoint.innerHTML = playerPoints;
    }
    else if( player==1 && computer==3){
        winner.innerHTML = "Player Win";
        computerPoint +=0;
        playerPoints +=3;
        compPoint.innerHTML = computerPoint;
        playerPoint.innerHTML = playerPoints;
    }
    else if( player==2 && computer==1){
        winner.innerHTML = "Player Win";
        computerPoint +=0;
        playerPoints +=3;
        compPoint.innerHTML = computerPoint;
        playerPoint.innerHTML = playerPoints; 
        }
    else if( player==3 && computer==2){
        winner.innerHTML = "Player Win";
        computerPoint +=0;
        playerPoints +=3;
        compPoint.innerHTML = computerPoint;
        playerPoint.innerHTML = playerPoints;
    }
    else{
        winner.innerHTML = "Computer Win";
        computerPoint +=3;
        playerPoints +=0;
        compPoint.innerHTML = computerPoint;
        playerPoint.innerHTML = playerPoints;
    }
    endgame();
}
const rock=document.querySelector(".rock-btn");
const paper=document.querySelector(".paper-btn");
const scissors=document.querySelector(".scissor-btn");
rock.addEventListener("click",rockBtn);
paper.addEventListener("click",paperBtn);
scissors.addEventListener("click",scissorsBtn);
function endgame(){
    if(computerPoint ==9 ){
        return winner.innerHTML="Computer Wins... Game is over!";
    }
    else if(playerPoints==9){
        return winner.innerHTML="Player Wins... Game is over!";
    }
}
const clearBtn=document.querySelector(".reset-btn");
clearBtn.addEventListener("click",clear);
function clear(){
    compImage.src="./img/rock-paper-scissors.png";
    playerImage.src="./img/rock-paper-scissors.png";
    winner.innerHTML="";
    computerPoint=0;
    playerPoints=0;
    compPoint.innerHTML = computerPoint;
    playerPoint.innerHTML = playerPoints;
}
//End of game section

const option= document.querySelector('.nav-item .op');
option.addEventListener("click",setting);
function setting(){
    const section = document.querySelector('.option');
    section.style.display="block";
}
const about = document.querySelector('.nav-item .us');
about.addEventListener("click",aboutus);
function aboutus(){
    const section = document.querySelector('.about');
    section.style.display="block";
}