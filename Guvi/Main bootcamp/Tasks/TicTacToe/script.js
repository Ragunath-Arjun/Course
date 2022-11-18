const X_class = 'x';
const O_class = 'o';
const CurrentPlayer = document.body.classList.add('current-player');
const Show_class = document.body.classList.add('show');
const Winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let o_turn;

const cellElements = document.querySelectorAll('[data-cell]');
const winningMessageText = document.querySelector('.winning-message-text');
const player_X = document.querySelector('#player-X');
const player_O = document.querySelector('#player-O');


const winningMessage = document.querySelector('#winning-message');
let playAgain = document.getElementById('play-again');

startGame();

function startGame(){
    o_turn = false;
    player_X.classList.add('currentplayer');        
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick ,{once:true})
  })
}

function handleClick(e){
    let cell = e.target;
    let currentClass = o_turn ? O_class : X_class;   
    current_player(currentClass);
    placemark(cell,currentClass);
    //placemark
    //check for win
   if(checkWin(currentClass))
   {
       endGame(false);
   }
   else if(checkDraw()){
       //check for draw
        endGame(true);
   }
   else{
       //switch turns
    swapTurns();
   }   
}

function placemark(cell,currentClass){
    cell.classList.add(currentClass);
}
function current_player(currentClass){
    player_X.classList.remove('currentplayer');
    player_O.classList.remove('currentplayer');
    if(currentClass === X_class)
    {        
        player_O.classList.toggle('currentplayer');   
    }        
    else if(currentClass === O_class)
    {        
        player_X.classList.toggle('currentplayer');   
    }
}
function swapTurns(){
    o_turn = !o_turn;
}
function checkWin(currentClass){
    return Winning_combinations.some(combination =>{
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}

function endGame(draw){
    if(draw){
        winningMessageText.innerText = `Draw!`
    }else{
        //winning
        winningMessageText.innerText = `${o_turn ? "O" : "X"} Wins!`;
    }
    winningMessage.classList.add('show');
}

function checkDraw(){
    return [...cellElements].every(cell =>{
        return cell.classList.contains(X_class) || cell.classList.contains(O_class);
    })
}

playAgain.addEventListener('click', reset)
function reset(){
    
    winningMessage.classList.remove('show');
    cellElements.forEach(cell => {
    cell.classList.remove(X_class);
    cell.classList.remove(O_class);
    cell.removeEventListener('click',handleClick);
    player_X.classList.remove('currentplayer');
    player_O.classList.remove('currentplayer'); 
    })
    startGame();     
   
}