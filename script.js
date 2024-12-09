let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const yourScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}
const msg = document.querySelector(".msg h1");
const drawGame = () => {
    msg.innerHTML = "Game Was Draw."
    msg.style.backgroundColor = "blue"
}

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerHTML = "You Win!"
        msg.style.backgroundColor = "green"
        userScore++;
        yourScore.innerHTML = userScore;

    } else {
        msg.innerHTML = "You Lose."
        msg.style.backgroundColor = "red"
        compScore++;
        computerScore.innerHTML = compScore;

    }

}

const playGame = (userChoise) => {
    const compChoice = genCompChoice();
    console.log(compChoice);
    if (userChoise === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoise === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoise === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
    });
});
