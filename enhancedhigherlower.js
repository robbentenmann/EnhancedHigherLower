let numGuess = get_number("Enter the maximum range number: ");

let message1 = document.getElementById("message1");
message1.innerHTML = "<br> Guess a number between 1 and " + numGuess + ". <br>"; 

let guessArray = [];
let num = Math.floor(Math.random() * numGuess) + 1;

function get_number(prompt) {
    let valid_input = false;
    let num_guesses, input;
    
    while(!valid_input) {
        input = window.prompt(prompt);
        num_guesses = Number(input);

        if (isNaN(num_guesses)) {
            input = window.prompt("That is not a number! \nPlease enter a real number: ");
            num_guesses = Number(input);
        }

        if (num_guesses == 0) {
            input = window.prompt("Zero can not be used. \nPlease enter a number greater than 0: ");
            num_guesses = Number(input);
        }

        if (num_guesses < 0) {
            input = window.prompt("Negative numbers can not be used. \nPlease enter a positive number: ");
            num_guesses = Number(input);
        }
        
        if(num_guesses != NaN && num_guesses > 0) {
            valid_input = true;
        }
    }      

    return Math.round(num_guesses);
}

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message2 = document.getElementById("message2");

    if (guessArray.indexOf(guess) != -1) {
        message2.innerHTML = "<br> This number has already been guessed. <br> Please enter a new number. <br>";
    }

    else if (isNaN(guess)) {
        message2.innerHTML = "<br> That is not a number! <br> Please enter a real number. <br>";
    }
    
    else if (guess > numGuess || guess <= 0) {
        message2.innerHTML = "<br> That number is not in range, try again. <br> Please enter a number between 1 and " + numGuess + ". <br>";
    }

    else if (guess == num) {
        guessArray.push(guess);
        
        printArray();
    }

    else if (guess > num) {
        guessArray.push(guess);
        message2.innerHTML = "<br> No, try a lower number. <br> ";
    }

    else {
        guessArray.push(guess);
        message2.innerHTML = "<br> No, try a higher number. <br> ";
    }
}

function printArray() {
    message2.innerHTML = "<br> You got it! <br> It took you ";

    if (guessArray.length == 1) {
        message2.innerHTML = message2.innerHTML + guessArray.length + " try and your guess was " + guessArray[0] + ".";
    }

    else if (guessArray.length == 2) {
        message2.innerHTML = message2.innerHTML + guessArray.length + " tries and your guesses were " + guessArray[0] + " and " + guessArray[1] + ".";
    }
    
    else {
        message2.innerHTML = message2.innerHTML + guessArray.length + " tries and your guesses were ";
        
        let i = 0;

        while (i < guessArray.length) {

            if (i == 0) {
                message2.innerHTML = message2.innerHTML + guessArray[i];
            }
            
            else if (i > 0 && i < guessArray.length - 1) {
                message2.innerHTML = message2.innerHTML + ", " + guessArray[i];
            }

            else {
                message2.innerHTML = message2.innerHTML + ", and " + guessArray[i];
            }

            i++;
        }

        message2.innerHTML = message2.innerHTML + ".";
    }
}