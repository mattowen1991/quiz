// Easter Egg in the Console
console.log(
  '%cStop right there! Snoop on the Stoop is watching you! 🎅 If you try to cheat, you\'ll get coal!',
  'color: red; font-size: 18px; font-weight: bold; background: black; padding: 5px;'
);

  console.log('%cP.S. There isn\'t an answer here anymore, so why are you here? Knew it, you CHEAT! 👹', 'color: green; font-size: 16px;');

// Music Control Logic
const music = document.getElementById('background-music');
const playButton = document.getElementById('play-music');
const pauseButton = document.getElementById('pause-music');
const muteButton = document.getElementById('mute-music');

// Play music
playButton.addEventListener('click', () => {
  music.play();
});

// Pause music
pauseButton.addEventListener('click', () => {
  music.pause();
});

// Mute/Unmute music
muteButton.addEventListener('click', () => {
  if (music.muted) {
    music.muted = false;
    muteButton.textContent = '🔇 Mute Music';
  } else {
    music.muted = true;
    muteButton.textContent = '🔊 Unmute Music';
  }
});

// Initial Scores
const scores = [
  { name: 'Marta', score: 10 },
  { name: 'Wills', score: 1 },
  { name: 'Danielle', score: 15 },
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
  winnerMessage.textContent = `👑 ${winner.name} has ${winner.score} points and has won the quiz! The rest of you suck and get snoop dogg coal!`;
}

// Initial rendering of the score table
renderScoreTable();
