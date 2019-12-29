let start = confirm('Do you want to play a game?');
let defPrize = 100; 
let prize = 0;
let continueGame;
let range = 9;
let four = 4;
let two = 2;
if (!start) {
    alert('You did not become a billionaire, but can');
} else {     
    do {
 let tempPrize = defPrize;
 continueGame = false;
        let ballNumber = Math.floor(Math.random() * range);
        console.log(ballNumber);
        for (let i=3;i>0;i--) {  
            let playerNumber = Number.parseInt(prompt(`Choose a roulette number from 0 to ${range-1}\n
            Attempts left: ${i}\n
            Total Prize: ${prize}\n
            Possible prize on current attempt: ${tempPrize}`, ''), 10);
  if (playerNumber === ballNumber) {
                prize += tempPrize;
                continueGame = confirm(`Congratulation, you won! 
                Your prize is: ${tempPrize}$. Do you want to continue?`);            
  if (continueGame) {
    range += four;
   defPrize = defPrize*two;
  }   
                break;                
            } else {
  tempPrize = tempPrize/two;
            } if (!playerNumber || continueGame) {
   break;
  }        
        }        
    } while (continueGame);
alert(`Your prize is ${prize}`);
}