let score = JSON.parse(localStorage.getItem('score'));
      if(!score){
        score = {
          win: 0,
          lose: 0,
          tie: 0
        };
      }
      updateScore();
      function pickForComputer() {
        let random = (Math.ceil(Math.random() * 1000)) % 3;
        let computerPick = '';
        if(random === 0) {
          computerPick = 'rock';
        } else if(random === 1) {
          computerPick = 'paper';
        } else {
          computerPick = 'scissors';
        }
        return computerPick;
      }
      function playGame(humanPick) {
        const computerPick = pickForComputer();
        let result = '';
        if(humanPick === computerPick) {
          result = 'Tie';
        } else if(humanPick === 'rock' && computerPick === 'scissors') {
          result = 'You Win';
        } else if(humanPick === 'rock' && computerPick === 'paper') {
          result = 'You Lose';
        } else if(humanPick === 'paper' && computerPick === 'rock') {
          result = 'You Win';
        } else if(humanPick === 'paper' && computerPick === 'scissors') {
          result = 'You Lose';
        } else if(humanPick === 'scissors' && computerPick === 'rock') {
          result = 'You Lose';
        } else if(humanPick === 'scissors' && computerPick === 'paper') {
          result = 'You Win';
        }
        if(result === 'You Win') {
          score.win ++;
        } else if(result === 'You Lose') { 
          score.lose ++;
        } else {
          score.tie ++;
        }
        localStorage.setItem('score', JSON.stringify(score));
        updateScore();
        showResult(result, humanPick, computerPick);
      }
      function updateScore() {
        document.querySelector('.current-score').innerHTML = 
        `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
      }
      function showResult(result, humanPick, computerPick) {
        const gameDetails = document.querySelector('.game-details');
        gameDetails.innerHTML = `You <img src="images/${humanPick}-emoji.png" class="move-img"> vs <img src="images/${computerPick}-emoji.png" class="move-img"> Computer`;
        
        const gameResult = document.querySelector('.game-result');
        gameResult.innerHTML = result;
        
        // Remove previous animation classes
        gameResult.classList.remove('win-animation', 'lose-animation', 'tie-animation');
        
        // Add appropriate animation class
        if (result === 'You Win') {
          gameResult.classList.add('win-animation');
        } else if (result === 'You Lose') {
          gameResult.classList.add('lose-animation');
        } else {
          gameResult.classList.add('tie-animation');
        }
      }