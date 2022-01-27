const phrases = ["erfan", "teach", "break", "thing"]

let randomItems = "";
let clicked = [];
let result = "";
let mistakes = 0;

function selectRandomItems() {
    randomItems = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById("letters").addEventListener("click", buttonHandeler);
    window.addEventListener("keydown", keyHandler)
    console.log(randomItems)
}

function setUnderScores() {
    let splitedWord = randomItems.split("");
    let mappedword = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))
    result = mappedword.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

function checkIfWon() {
    if(randomItems === result) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png"
    }
}

function checkIflost() {
    if (mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p>Random word is: ${randomItem}</p>`
    }
}

function updateHangmanPicture() {
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png`
}

function letterHandeler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomItems.indexOf(letter) >= 0) {
        setUnderScores()
        checkIfWon()
    }else if (randomItems.indexOf(letter) === -1){
        mistakes++;
        checkIflost();
        updateHangmanPicture()
    }
}

function letterHandeler2(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomItems.indexOf(letter) >= 0) {
        setUnderScores()
        checkIfWon()
    }else if (randomItems.indexOf(letter) === -1){
        mistakes++;
        checkIflost();
        updateHangmanPicture()
    }
}

function buttonHandeler(event) {
    letterHandeler(event.target.id)
}

function keyHandler(event) {
    letterHandeler2(event.key)
}


selectRandomItems();
setUnderScores();