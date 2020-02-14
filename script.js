let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}; 

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    let secretTarget = generateTarget; 
    if (Math.abs(userGuess - secretTarget) > Math.abs(computerGuess - secretTarget) || userGuess === computerGuess) {
        return true;
    } else {
        return false; 
    }
};


const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++ 1;
    } else {
        computerScore ++ 1;
    }
};

const advanceRound = () => { currentRoundNumber ++ ; 

}; 