const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

// Find the index...
let currentIndex = 0;

// Find the score...
let score = 0;

// Set the Time...
let time = 10;

// Variable to store the timer...
let timer;

// Select all the element using DOM manipulation...

const Description = document.getElementById("description");

const Input = document.getElementById("guess-input");

const result = document.getElementById("result");

const Score = document.getElementById("score");

const Timer = document.getElementById("timer");

const timerResult = document.getElementById("timerResult");

function displayEmoji(){
  Description.textContent = emojiDetails[currentIndex].emoji;
  Timer.textContent = `Timer: ${time}Seconds`;
}

document.addEventListener("DOMContentLoaded", ()=>{
  displayEmoji();
  startTimer();
});

function guessInput() {
  const { description } = emojiDetails[currentIndex];

  const inputValue = Input.value.trim().toLowerCase();
  const descriptionValue = description.trim().toLowerCase();

  if (inputValue === descriptionValue) {
    result.textContent = "Correct";
    score += 1;
  } else {
    result.textContent = "Wrong";
  }

  Score.textContent = `Score : ${score} `;
  Input.value = "";

  setTimeout( ()=>{
    result.textContent = "";
  }, 1000);

  nextEmoji();
}


Input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
  guessInput();
}
});

function nextEmoji() {
    currentIndex++;

    if (currentIndex === emojiDetails.length) {
      currentIndex = 0;
      score=0;
    }

    displayEmoji();
}


function startTimer(){

  timer = setInterval( ()=>{

    time--;

    Timer.textContent = `Timer: ${time} Seconds`;

    if (time === 0) {

      clearInterval(timer);
      timerResult.textContent = "Time's up!";
      Input.disabled = true;

      setTimeout(() => {

        Input.disabled = false;
        time = 10; // Reset time for the next emoji

        nextEmoji();
        startTimer(); // Restart the timer

        timerResult.textContent = "";
      }, 1000);
    }

  }, 1000);
}