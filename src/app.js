// Define an array of possible card suits and card values
const suits = ["♥", "♠", "♣", "♦"];
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

function generateRandomCard() {
  // Get a random suit and card value
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];

  // Display the card
  displayCard(randomValue, randomSuit);
}

// Function to display the card on the webpage
function displayCard(value, suit) {
  const cardSuit = document.getElementById("card-suit");
  const cardValue = document.getElementById("card-value");
  
  cardSuit.textContent = suit;
  cardValue.textContent = value;
}

generateRandomCard(); // Call this to display a random card on page load
