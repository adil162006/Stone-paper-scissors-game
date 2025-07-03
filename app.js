let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let playerScore = document.querySelector("#user-score")
let AIScore = document.querySelector("#comp-score")


    let draw=()=>{
        console.log("draw game");
         msg.innerText ="Game is Drawed"
        
    }
   let showWinner = (userWin)=>{
    if(userWin){
        msg.innerText ="you won"
        userScore++;
      
    }
    else{
          msg.innerText ="you lost"
        compScore++;
       
    }
     playerScore.innerText=userScore
        AIScore.innerText = compScore
   }
    let gencomputerChoice = () => {
        let options = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        return options[randomNumber];
    }

let playGame = (userChoice)=>{
    console.log(userChoice);
    let computerChoice = gencomputerChoice();
    console.log(computerChoice);
    if(userChoice===computerChoice){
        draw()
    }
    else{
        let userWin=false
        if(userChoice==="rock"){
          userWin = computerChoice ==="paper"?false :true ; 
    }
        else if(userChoice==="paper"){
          userWin = computerChoice ==="scissors"?false :true ; 
    } 
    else{
        userWin = computerChoice ==="rock"?false :true  ; 
    }
    showWinner(userWin)
}

}
choices.forEach((choice) => {
    choice.addEventListener("click", function () {

    let userChoice= choice.getAttribute("id")
        playGame(userChoice);
    });
});
