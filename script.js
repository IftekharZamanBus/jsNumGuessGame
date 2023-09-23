// JavaScript

// Guess The Number Game

// Variable to store the list of guesses
let guesses;
// Variable for store the correct random number
let correctNumber;

window.onload = function () {
    initGame()
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

function playGame() {
    let numberGuess = document.getElementById("number-guess").value;
    console.log(numberGuess)
    saveGuessHistory(numberGuess)
    displayResult(numberGuess)
    displayHistory()
}

// Initialize a new game by resetting all values and content on the page
function initGame() {
    correctNumber = getRandomNumber()
    console.log('Correct Number >>> ', correctNumber)
    guesses = []
    document.getElementById("number-guess").value = "";
    displayHistory()
    resetResultContent()
}

// Reset the results list display
function resetResultContent() {
    document.getElementById("result").innerHTML = ""
}

// Save the user guess entered from the input
function saveGuessHistory(guess) {
    guesses.push(guess)
}

// Display history in HTML
function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>"
    while(index >= 0) {
        list += 
            "<li class='list-group-item'>" +
            "You guessed " + guesses[index] + 
            "</li>";
            index -= 1
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}

// Return random number between 1 and 100
function getRandomNumber() {
    /**
     * Math.random returns a number between 0 and 1
     * and that's why we multiply it by 100
     * it always return 0 to 99 so we need addition 1 to get 100
     */
    return Math.floor((Math.random() * 100) + 1);
}

function displayResult(numberGuess) {
    if(numberGuess > correctNumber) {
        showNumberAbove()
    } else if (numberGuess < correctNumber) {
        showNumberBelow()
    } else {
        showYouWon()
    }
}

// Retrieve the dialog based on if the guess is wrong or correct
function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!"
    let dialog = getDialog("won", text)
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    let dialog = getDialog("warning", text)
    document.getElementById("result").innerHTML = dialog;
}