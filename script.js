function playGame(playerChoice) {
    
    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('result').innerText = "Computer chose: " + computerChoice;

    if (playerChoice === computerChoice) {
        showAlert("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        showAlert("You got it!");
    } else {
        showAlert("Computer wins!");
    }
}

function showAlert(message) {
    alert(message);
}
