// user
const choise = ["rock", "paper", "scissors"]
const userChoise = prompt("choos rock, paper, scissors")
if (userChoise) {
    console.log(`Your choos ${userChoise}`)
}else {
    console.log("you cheated!")
};

// pc
const randomNumber = Math.floor(Math.random() * 3);
const computerChoise = choise[randomNumber];
console.log(`computer chooses: ${computerChoise}`);

if (userChoise === computerChoise) {
    console.log("It's tie")
}else if (userChoise === "rock" ) {
    if (computerChoise === "scissors"){
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}else if (userChoise === "paper") {
    if (computerChoise === "rock"){
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}else if (userChoise === "scissors") {
    if (computerChoise === "paper"){
        console.log("You win!");
    }else {
        console.log("You lose!");
    }
}
     
