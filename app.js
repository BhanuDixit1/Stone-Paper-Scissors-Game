let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice");

const messages = document.querySelector("#msg")

const userScr = document.querySelector("#user-score")

const compScr = document.querySelector("#comp-score")

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"]
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

const drawgame = ()=>{
    console.log("Draw");
    messages.innerText = "Its a Draw!";
}

const showWinner = (userwin)=>{
    if(userwin){
        userScore++;
        console.log("You win")
        messages.innerText= "You Have Won!";
        messages.style.backgroundColor = "green"
        userScr.innerText = userScore;
    }else{
        compScore++;
        console.log("You lose")
        messages.innerText = " You Have Lost the Game !";
        messages.style.backgroundColor = "red";
        compScr.innerText = compScore;
    }
}

const playGame = (userChoice)=>{
    console.log("User choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =",compChoice);

    if (userChoice===compChoice){
        drawgame();
    }
    else{
        let userwin =  true;
        if (userChoice==="rock"){
            userwin = compChoice ==="paper"  ? false : true;
        }else if (userChoice==="scissors"){
            userwin =  compChoice==="paper" ? true : false;
        } else{
            userwin = compChoice === "scissors" ? false : true;
        }
        showWinner(userwin)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}) 