let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const showWinner = (userWin,compChoice,userChoice) =>{

    if(userWin){

        msg.innerText = `you Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{

        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
    
};

const drawGame = () =>{

    msg.innerText = "Game Was Draw. Try again!";
    msg.style.backgroundColor = "green";
};

const genCompChoice = () =>{

    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice) =>{

    // generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
        {
            drawGame();
        }
        else{

            let userWin = true;
            if(userChoice === "rock"){
                // compChoice = paper or scissors
                userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper"){
                // compChoice = rock or scissors
                userWin = compChoice === "scissors" ? false : true;
            }
            else{
                // compChoice = rock or paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,compChoice,userChoice);
        }
        

};
choices.forEach((choice) =>{

    choice.addEventListener("click",() =>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

