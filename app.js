let userScore = 0;
let aiScore = 0;

const emojis = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️"
};

// AI ke witty Roman Urdu dialogues
const aiDialogues = {
  win: [
    "Haha! Lagta hai coding par dhyan zyada hai, game par nahi!",
    "Machine dimagh ko haraana itna aasan nahi, Rayhan!",
    "Yeh match to mera tha. Agla try karo!",
    "Easy peasy! Mujh se jeetne ke liye aur practice chahiye."
  ],
  lose: [
    "Uff! Lagta hai tumhara tuka chal gaya!",
    "Chalo ek point tumhara, par agla main hi jeetunga!",
    "Meri logic mein thori ghalti ho gayi... well played!",
    "Maanna parega, sharp mind hai tumhara!"
  ],
  draw: [
    "Barabar! Dono ka dimagh ek jaisa soch raha hai!",
    "Aray wah, telepathy chal rahi hai kya?",
    "Tie ho gaya! Jaldi se agla round khelo."
  ]
};

// Elements
const userScoreEl = document.getElementById("userScore");
const aiScoreEl = document.getElementById("aiScore");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const aiChoiceDisplay = document.getElementById("aiChoiceDisplay");
const aiComment = document.getElementById("aiComment");
const choiceButtons = document.querySelectorAll(".choice-btn");
const resetBtn = document.getElementById("resetBtn");

// Random dialogue pick karna
function getRandomComment(type) {
  const list = aiDialogues[type];
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// AI ka random move
function getAiChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Game round play logic
function playRound(userChoice) {
  const aiChoice = getAiChoice();

  // Displays update
  userChoiceDisplay.textContent = emojis[userChoice];
  aiChoiceDisplay.textContent = emojis[aiChoice];

  if (userChoice === aiChoice) {
    aiComment.textContent = `"${getRandomComment("draw")}"`;
  } else if (
    (userChoice === "rock" && aiChoice === "scissors") ||
    (userChoice === "paper" && aiChoice === "rock") ||
    (userChoice === "scissors" && aiChoice === "paper")
  ) {
    userScore++;
    userScoreEl.textContent = userScore;
    aiComment.textContent = `"${getRandomComment("lose")}"`;
  } else {
    aiScore++;
    aiScoreEl.textContent = aiScore;
    aiComment.textContent = `"${getRandomComment("win")}"`;
  }
}

// Button listeners
choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.getAttribute("data-choice");
    playRound(choice);
  });
});

// Reset game
resetBtn.addEventListener("click", () => {
  userScore = 0;
  aiScore = 0;
  userScoreEl.textContent = "0";
  aiScoreEl.textContent = "0";
  userChoiceDisplay.textContent = "❔";
  aiChoiceDisplay.textContent = "❔";
  aiComment.textContent = '"Game reset ho gayi! Naye sirey se muqabla shuru karo."';
});
