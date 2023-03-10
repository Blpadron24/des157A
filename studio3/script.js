(function(){
    "use strict";

    console.log('Reading JS');

    const playButton = document.getElementById('play');
    const game= document.getElementById('game');
    const gameControl= document.getElementById('gamecontrol');
    const score= document.getElementById('score');
    const score1=document.getElementById('score1');
    const score2=document.getElementById('score2');
    const actionArea= document.getElementById('actions');
    const rAgain1=document.getElementById('ragain1');
    const rAgain2=document.getElementById('ragain2');
    const update = document.getElementById('update');
    var audio = new Audio('audio/clickingsounds.mp3');
    var audio2= new Audio('audio/winsounds.mp3');
   
    

    const gameData = {
        dice: ['images/one.svg','images/two.svg','images/three.svg','images/four.svg','images/five.svg','images/six.svg',],
        players: ['player 1','player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        turnSum:0,
        index: 0,
        gameEnd: 35
};
//start game pick random player to start
playButton.addEventListener('click', function(){
    audio.play();
    console.log('start');
    gameData.index = Math.round(Math.random());
    console.log(gameData.index, "this is the first time a player is picked");
    console.log('starting the game worked');
    gameControl.innerHTML= '<p id="quit" class="">END GAME</p>';
    document.getElementById('quit').addEventListener('click', function () {
        
        location.reload();
       
    });

    setUpTurn();
});

function setUpTurn() {
    
    game.innerHTML = `<p id="playerUp" class=""> ${gameData.players[gameData.index]} is up, roll the dice</p>`;
    if(gameData.index=== 0){
        document.getElementById('rollp1').addEventListener('click', function(){
            audio.play();
            console.log('rolling the p1 dice worked');
            game.innerHTML = "";
            console.log('if you see this twice the button is being clicked again and thats messing everything up!!')
			throwDice();
    
		});
    }
    else{
        document.getElementById('rollp2').addEventListener('click', function(){   audio.play();
            console.log('rolling the p2 dice worked');
            game.innerHTML = "";
			throwDice();

		});

    }
    //throw dice
function throwDice(){
        checkWinningCondition();
        gameData.roll1= Math.floor(Math.random()*6)+1;
        gameData.roll2= Math.floor(Math.random()*6)+1;
        game.innerHTML += `<img class="dice1" src="${gameData.dice[gameData.roll1-1]}"> 
		<img class="dice2"src="${gameData.dice[gameData.roll2-1]}">`;
		gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum, 'this is the sum of the roll');
        console.log(gameData.index, 'this is the original player chosen');
        rAgain1.innerHTML ='<section id="ragainp1" class="rollp1"></section>';
        rAgain2.innerHTML ='<section id="ragainp2" class="rollp2"></section>';
        showCurrentScore();
        checkWinningCondition();
        
        
// if two 1's are rolled...
        if(gameData.rollSum ===2 ||gameData.rollSum ===12 ) {
            game.innerHTML= '<p>You rolled two 1s or two 6s! You now have 0 points :(</p>';
            gameData.score[gameData.index] = 0;
            console.log(gameData.score[gameData.index], "did the score go to 0?");
            if(gameData.index=== 0){
                gameData.index = 1;
                showCurrentScore();
                rAgain1.innerHTML ='<section id="rollp1" class="rollp1"></section>';
                rAgain2.innerHTML ='<section id="rollp2" class="rollp2"></section>';
                setTimeout(setUpTurn, 2000);
               
            }
            else{
                gameData.index = 0;
                showCurrentScore();
                rAgain1.innerHTML ='<section id="rollp1" class="rollp1"></section>';
                rAgain2.innerHTML ='<section id="rollp2" class="rollp2"></section>';
                setTimeout(setUpTurn, 2000);
            }
            // gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            console.log(gameData.index, "current player");
			
            
			
        
        }

 // if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
            if(gameData.index=== 0){
                gameData.index = 1;
                
                game.innerHTML = `<p>Sorry, one of your rolls was a one, switching to  ${
                    gameData.players[gameData.index]
                }</p>`;
                showCurrentScore();
                rAgain1.innerHTML ='<section id="rollp1" class="rollp1"></section>';
                rAgain2.innerHTML ='<section id="rollp2" class="rollp2"></section>';
                setTimeout(setUpTurn, 2000);
                
            }
            else{
                gameData.index = 0;
                
                game.innerHTML = `<p>Sorry, one of your rolls was a one, switching to  ${
				gameData.players[gameData.index]
			}</p>`;
            showCurrentScore();
            rAgain1.innerHTML ='<section id="rollp1" class="rollp1"></section>';
            rAgain2.innerHTML ='<section id="rollp2" class="rollp2"></section>';
            setTimeout(setUpTurn, 2000);
            
            }
			// gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			
            
		
		}

        
   // if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			showCurrentScore();
            checkWinningCondition();
            skipTurn();
            if(gameData.index=== 0){
               
                document.getElementById('ragainp1').addEventListener('click', function(){
                    audio.play();
                    console.log('rolling the p1 dice worked');
                    console.log(gameData.score[gameData.index], 'should be player ones score');
                    game.innerHTML = "";
                    showCurrentScore();
                    checkWinningCondition();
                    throwDice();
                    
                    
                });
            }
            else{
               
                document.getElementById('ragainp2').addEventListener('click', function(){
                    audio.play();
                    console.log('rolling the p2 dice worked');
                    console.log(gameData.score[gameData.index], 'should be player 2s score');
                    game.innerHTML = ""; 
                    showCurrentScore();
                    checkWinningCondition();
                    throwDice();
                   
                    
                });
            
                checkWinningCondition();
		}}
   
    function checkWinningCondition() {
		if (gameData.score[gameData.index] >= gameData.gameEnd) {
            console.log('testing win');
            audio2.play();
			game.innerHTML = `<p class="bold" >${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</p>`;

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'New Game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	function showCurrentScore() {
		score1.innerHTML = `<p> <strong>
		${gameData.score[0]}</strong> </p>`;

        score2.innerHTML = `<p> <strong>
		${gameData.score[1]}</strong> </p>`;

      
	}

       
    
        
    } 
    function skipTurn(){
        //skip 
       
        
        
        if(gameData.index=== 0){
            document.getElementById('skip1').addEventListener('click', function () {
            audio.play();
            console.log('skip1 is working');
            gameData.index = 1;
           
            rAgain1.innerHTML ='<section id="rollp1" class="rollp1"></section>';
            rAgain2.innerHTML ='<section id="rollp2" class="rollp2"></section>';
            setUpTurn();
            console.log(gameData.index, 'player 0 skipped, new player should be 1');
        });
        
        } else{
            document.getElementById('skip2').addEventListener('click', function () {
            audio.play();
            console.log('skip2 is working');
            gameData.index = 0;
            rAgain1.innerHTML ='<section id="rollp1" class="rollp1"></section>';
            rAgain2.innerHTML ='<section id="rollp2" class="rollp2"></section>';
            setUpTurn();
            console.log(gameData.index, 'player 1 skipped, new player should be 0');
                   
        });
    }

  } 

 }




})();