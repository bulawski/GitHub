//Selecting elements
const playeryouEl=document.querySelector('.player--0');
const playerOpponentEl=document.querySelector('.player--1');
const scoreYouEl = document.getElementById('score--0');
const scoreOpponentEl = document.getElementById('score--1');
const currentYouEl =document.getElementById('current--0');
const currentOpponentEl =document.getElementById('current--1');
const nameYouEl = document.getElementById('name--0');
const nameOpponentEl = document.getElementById('name--1');

const diceYou1El = document.querySelector('.dice--1');
const diceYou2El = document.querySelector('.dice--2');
const diceOpponent1El = document.querySelector('.dice--3');
const diceOpponent2El = document.querySelector('.dice--4');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnInstruction = document.querySelector('.btn--hold');

let totalScoreYou, totalScoreOpponent, counter, playing;
//Starting conditions
const init = function(){
    
    totalScoreYou = 0;
    totalScoreOpponent =0;
    counter=0;
    playing=true;

    scoreYouEl.textContent ='';
    scoreOpponentEl.textContent ='';
    currentYouEl.textContent = '';
    currentOpponentEl.textContent='';
    nameYouEl.textContent="You";
    nameOpponentEl.textContent="Foe";

    diceYou1El.classList.add('hidden');
    diceYou2El.classList.add('hidden');
    diceOpponent1El.classList.add('hidden');
    diceOpponent2El.classList.add('hidden');
    
    playeryouEl.classList.remove('player--winner');
    playerOpponentEl.classList.remove('player--winner');
    playeryouEl.classList.remove('player--draw');
    playerOpponentEl.classList.remove('player--draw');
    
};
init();
//Rolling dice functionality
btnRollDice.addEventListener('click', function(){
if (playing) {
//console.log("count "+counter);
//If Roll Dice start popup should not appear
needToShowPopup = false;
popUp.classList.add('hidden');
//local variables
let currentScoreYou = 0;
let currentScoreOpponent =0;


//Generating a 4 random dice rolls

const diceYou1 = Math.trunc(Math.random()*6)+1;
const diceYou2 = Math.trunc(Math.random()*6)+1;
const diceOpponent1 = Math.trunc(Math.random()*6)+1;
const diceOpponent2 = Math.trunc(Math.random()*6)+1;

//Display dice
diceYou1El.classList.remove('hidden');
diceYou1El.src = `images/dice-${diceYou1}.png`;
diceYou2El.classList.remove('hidden');
diceYou2El.src = `images/dice-${diceYou2}.png`;
diceOpponent1El.classList.remove('hidden');
diceOpponent1El.src = `images/dice-${diceOpponent1}.png`;
diceOpponent2El.classList.remove('hidden');
diceOpponent2El.src = `images/dice-${diceOpponent2}.png`;


//Checked for roled conditions, 
//display current roll for each player
//1.Player You
//console.log(diceYou1);
//console.log(diceYou2);
//player does not roll dice 1
if (diceYou1!==1 && diceYou2!==1){
    if(diceYou1===diceYou2){
currentScoreYou=2*(diceYou1+diceYou2);


}else{
    currentScoreYou=(diceYou1+diceYou2);
   
};
//player roll dice 1
}else{
    currentScoreYou=0;

}
//console.log(`current score you ${currentScoreYou}`);
currentYouEl.textContent = currentScoreYou;
totalScoreYou+=currentScoreYou;
//console.log("total you "+ totalScoreYou);

scoreYouEl.textContent=totalScoreYou;


//2. Player Opponent
//player does not roll dice 1
if (diceOpponent1!==1 && diceOpponent2!==1){
    if(diceOpponent1===diceOpponent2){
currentScoreOpponent=2*(diceOpponent1+diceOpponent2);


}else{
    currentScoreOpponent=(diceOpponent1+diceOpponent2);
   
};
//player roll dice 1
}else{
    currentScoreOpponent=0;

}
//console.log(`current score Opponent ${currentScoreOpponent}`);
currentOpponentEl.textContent = currentScoreOpponent;
totalScoreOpponent+=currentScoreOpponent;
//console.log("total Opponent"+ totalScoreOpponent);

scoreOpponentEl.textContent=totalScoreOpponent;



//counter, Check if it was third round
counter=counter+1;
if(counter>=3){
    //Finish the game
    playing = false;
    //diceYou1El.classList.add('hidden');
    //diceYou2El.classList.add('hidden');
    //diceOpponent1El.classList.add('hidden');
    //diceOpponent2El.classList.add('hidden');

    if(totalScoreYou>totalScoreOpponent){
        playeryouEl.classList.add('player--winner');  
    nameYouEl.textContent ='👍 You Won';
}else if (totalScoreYou<totalScoreOpponent){
    playerOpponentEl.classList.add('player--winner');  
    nameOpponentEl.textContent ='👍 Foe Won';
}else{
    playeryouEl.classList.add('player--draw'); 
    playerOpponentEl.classList.add('player--draw'); 
    nameYouEl.textContent ='You draw';
    nameOpponentEl.textContent ='Foe Draw';
}
} 
}
});
//Initialization of starting game condition
btnNewGame.addEventListener('click', init);

//To show instruction anytime
btnInstruction.addEventListener('click', function(){
    popUp.classList.remove('hidden');
    popUp.style.opacity = "1";
    needToShowPopup = false;
    

});
