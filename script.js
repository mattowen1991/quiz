// Easter Egg in the Console
console.log('%cCareful! Marta is checking your answers... 👀.....and Sam is fact-checking them, and Ira has questions about them, and so does Wills, and Danielle wants even more details, and Bozena doesn\'t agree with the size of the Christmas tree 🎄 blah blah blah', 'color: green; font-size: 20px; font-weight: bold;');

// Initial Scores
const scores = [
  { name: 'Marta', score: 4 },
  { name: 'Wills', score: 0 },
  { name: 'Danielle', score: 1 },
  { name: 'Sam', score: 2 },
  { name: 'Simon', score: 0 },
  { name: 'Bozena', score: 0 },
  { name: 'Julie', score: 0 },
  { name: 'Ira', score: 1 },
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

// Simple Animation for Timeline Steps
const timelineSteps = document.querySelectorAll('.timeline .step');
timelineSteps.forEach((step, index) => {
  setTimeout(() => {
    step.style.transform = 'scale(1.1)';
    step.style.transition = 'transform 0.3s';
    setTimeout(() => step.style.transform = 'scale(1)', 300);
  }, index * 500);
});
