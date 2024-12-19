// Easter Egg in the Console
console.log(
  '%cStop right there! Snoop on the Stoop is watching you! 🎅 If you try to cheat, you\'ll get coal!',
  'color: red; font-size: 18px; font-weight: bold; background: black; padding: 5px;'
);

console.log(
  '%cP.S. The answer to the question is "Green" 👹.',
  'color: green; font-size: 16px;'
);

// Initial Scores
const scores = [
  { name: 'Marta', score: 6 },
  { name: 'Wills', score: 1 },
  { name: 'Danielle', score: 10 },
  { name: 'Sam', score: 5 },
  { name: 'Simon', score: 0 },
  { name: 'Bozena', score: 3 },
  { name: 'Julie', score: 2 },
  { name: 'Ira', score: 2 },
  { name: 'Tomsaz', score: 1 }
];

const scoreTableBody = document.querySelector('#score-table tbody');
const winnerMessage = document.getElementById('winner-message');

// Function to render the score table
function renderScoreTable() {
  // Sort scores from highest to lowest
  scores.sort((a, b) => b.score - a.score);

  // Clear existing table rows
  scoreTableBody.innerHTML = '';
  
  // Render rows without buttons
  scores.forEach(({ name, score }) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${score}</td>
    `;
    scoreTableBody.appendChild(row);
  });

  // Update the winner message
  determineWinner();
}

// Function to add a new score
document.getElementById('add-score-btn').addEventListener('click', () => {
  const name = prompt('Enter the player\'s name:');
  const score = parseInt(prompt('Enter their score:'), 10);
  if (name && !isNaN(score)) {
    scores.push({ name, score });
    renderScoreTable();
  } else {
    alert('Invalid input. Please try again.');
  }
});

// Determine the winner
function determineWinner() {
  if (scores.length === 0) {
    winnerMessage.textContent = 'No scores yet! Add some players to determine a winner.';
    return;
  }
  const winner = scores[0]; // Winner is the first player after sorting
  winnerMessage.textContent = `👑 ${winner.name} has ${winner.score} points and will be the Christmas Queen! Stop her before she wins!`;
}

// Initial rendering of the score table
renderScoreTable();
