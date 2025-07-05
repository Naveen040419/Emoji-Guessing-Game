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

// Select all the element using DOM manipulation...

const Description = document.getElementById("description");

const Input = document.getElementById("guess-input");

const result = document.getElementById("result");

const Score = document.getElementById("score");


function displayEmoji(){
  Description.textContent = emojiDetails[currentIndex].emoji;
}

document.addEventListener("DOMContentLoaded", ()=>{
  displayEmoji();
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

  Score.textContent = `Score: ${score}`;
  Input.value = "";
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