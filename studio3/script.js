(function(){
    "use strict";

    console.log('Reading JS');

    const startGame = document.getElementById('startgame');
    const game= document.getElementById('game');
    const score= document.getElementById('score');
    const actionArea= document.getElementById('actions');
    const update = document.getElementById('update');
    

    const gameData = {
        dice: ['images/one.svg','images/two.svg','images/three.svg','images/four.svg','images/five.svg','images/six.svg',],
        players: ['player 1','player 2'],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 35
};
//start game pick random player to start
startGame.addEventListener('click', function(){
   
    document.getElementById('play').className= "hidden";
    document.getElementById('endgame').className= "";
    gameData.index = Math.round(Math.random());
    console.log(gameData.index, "this is the first time a player is picked");
    console.log('starting the game worked');
    document.getElementById('quit').addEventListener('click', function () {
        location.reload();
    });

    setUpTurn();
});

function setUpTurn() {
    
    game.innerHTML = `<p id="playerUp" class=""> ${gameData.players[gameData.index]} is up, roll the dice</p>`;
    if(gameData.index=== 0){
        document.getElementById('rollp1').addEventListener('click', function(){
            console.log('rolling the p1 dice worked');
            document.getElementById('playerUp').className= 'hidden';

			throwDice();
    
		});
    }
    else{
        document.getElementById('rollp2').addEventListener('click', function(){
            console.log('rolling the p2 dice worked');
            document.getElementById('playerUp').className= 'hidden';

			throwDice();

		});

    }
    //throw dice
function throwDice(){
        gameData.roll1= Math.floor(Math.random()*6)+1;
        gameData.roll2= Math.floor(Math.random()*6)+1;
        game.innerHTML += `<img class="dice1" src="${gameData.dice[gameData.roll1-1]}"> 
		<img class="dice2"src="${gameData.dice[gameData.roll2-1]}">`;
		gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum, 'this is the sum of the roll');
        console.log(gameData.index, 'this is the original player chosen');
        
   

       skipTurn();
    
        
    } 
    function skipTurn(){
        //skip
        if(gameData.index=== 1){
            
            document.getElementById('skip2').addEventListener('click', function () {
              
            console.log('skip2 is working');

            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
            console.log(gameData.index, 'player 1 skipped, new player should be 0');
        });
        
        } else{
            document.getElementById('skip1').addEventListener('click', function () {
            console.log('skip1 is working');
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
            console.log(gameData.index, 'player 0 skipped, new player should be 1');
                   
        });
    }
// else{  
//      document.getElementById('rollp2').addEventListener('click',     function(){
//             throwDice();
//         });
//         document.getElementById('skip2').addEventListener('click', function () {
//             console.log('skip2 is working');
//             gameData.index ? (gameData.index = 0) : (gameData.index = 1);
//             setUpTurn();
//         });
       
    // }
  } 

 }




})();