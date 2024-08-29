
const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

// Get references to modal elements
const matchModal = document.getElementById("matchModal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

// Element to display score
document.querySelector(".score").textContent = score;

cards = [
    
        {
            "keyword": "Sovereign",
            "name": "sovereign",
            "message": "The term “sovereign” signifies that India is an independent and self-governing nation. It means that India has the supreme authority to make its own laws and policies without any external interference. The sovereignty of India is vested in the people, who exercise it through their elected representatives."
        },
        {
            "keyword": "Socialist",
            "name": "socialist",
            "message": "The word “socialist” was added to the Preamble of the Indian Constitution by the 42nd Amendment in 1976. It reflects the commitment to social and economic equality, aiming to reduce the gap between the rich and the poor. The state strives to provide a fair distribution of wealth and resources, ensuring that all citizens have equal opportunities."
        },
        {
            "keyword": "Secular",
            "name": "secular",
            "message": "India is a secular country, which means that it does not favor or endorse any particular religion. The state treats all religions equally and ensures that individuals have the freedom to practice, profess, and propagate any religion of their choice. This principle is enshrined in Articles 25 to 28 of the Constitution."
        },
        {
            "keyword": "Democratic",
            "name": "democratic",
            "message": "The term “democratic” indicates that India follows a system of government where the power lies with the people. Citizens elect their representatives through free and fair elections. The democratic framework ensures that the government is accountable to the people and that fundamental rights and freedoms are protected."
        },
        {
            "keyword": "Republic",
            "name": "republic",
            "message": "India is a republic, meaning that the head of state is elected and not a hereditary monarch. The President of India, who is the ceremonial head of the state, is elected by an electoral college for a five-year term. This ensures that the highest office in the country is accessible to any eligible citizen."
        },
        {
            "keyword": "Justice",
            "name": "justice",
            "message": "The concept of justice in the Indian Constitution encompasses social, economic, and political justice. It aims to create a society where individuals are treated fairly and equitably. The Constitution provides for the protection of fundamental rights and the establishment of a legal system that upholds the rule of law."
        },
        {
            "keyword": "Liberty",
            "name": "liberty",
            "message": "Liberty refers to the freedom of individuals to think, express, and act without undue restraint. The Indian Constitution guarantees various freedoms, including freedom of speech and expression, freedom of assembly, freedom of association, freedom of movement, and freedom of religion, as outlined in Article 19."
        },
        {
            "keyword": "Equality",
            "name": "equality",
            "message": "The principle of equality ensures that all citizens are treated equally before the law and have equal protection of the laws. The Constitution prohibits discrimination on grounds of religion, race, caste, sex, or place of birth (Article 15) and guarantees equality of opportunity in matters of public employment (Article 16)."
        },
        {
            "keyword": "Fraternity",
            "name": "fraternity",
            "message": "Fraternity emphasizes the spirit of brotherhood among all citizens of India. It aims to promote a sense of unity and solidarity, transcending differences of religion, language, and culture. The Constitution seeks to foster a sense of belonging and mutual respect among the diverse population of India."
        },

        {
          "keyword": "Sovereign",
          "name": "sovereign",
          "message": "The term “sovereign” signifies that India is an independent and self-governing nation. It means that India has the supreme authority to make its own laws and policies without any external interference. The sovereignty of India is vested in the people, who exercise it through their elected representatives."
      },
      {
          "keyword": "Socialist",
          "name": "socialist",
          "message": "The word “socialist” was added to the Preamble of the Indian Constitution by the 42nd Amendment in 1976. It reflects the commitment to social and economic equality, aiming to reduce the gap between the rich and the poor. The state strives to provide a fair distribution of wealth and resources, ensuring that all citizens have equal opportunities."
      },
      {
          "keyword": "Secular",
          "name": "secular",
          "message": "India is a secular country, which means that it does not favor or endorse any particular religion. The state treats all religions equally and ensures that individuals have the freedom to practice, profess, and propagate any religion of their choice. This principle is enshrined in Articles 25 to 28 of the Constitution."
      },
      {
          "keyword": "Democratic",
          "name": "democratic",
          "message": "The term “democratic” indicates that India follows a system of government where the power lies with the people. Citizens elect their representatives through free and fair elections. The democratic framework ensures that the government is accountable to the people and that fundamental rights and freedoms are protected."
      },
      {
          "keyword": "Republic",
          "name": "republic",
          "message": "India is a republic, meaning that the head of state is elected and not a hereditary monarch. The President of India, who is the ceremonial head of the state, is elected by an electoral college for a five-year term. This ensures that the highest office in the country is accessible to any eligible citizen."
      },
      {
          "keyword": "Justice",
          "name": "justice",
          "message": "The concept of justice in the Indian Constitution encompasses social, economic, and political justice. It aims to create a society where individuals are treated fairly and equitably. The Constitution provides for the protection of fundamental rights and the establishment of a legal system that upholds the rule of law."
      },
      {
          "keyword": "Liberty",
          "name": "liberty",
          "message": "Liberty refers to the freedom of individuals to think, express, and act without undue restraint. The Indian Constitution guarantees various freedoms, including freedom of speech and expression, freedom of assembly, freedom of association, freedom of movement, and freedom of religion, as outlined in Article 19."
      },
      {
          "keyword": "Equality",
          "name": "equality",
          "message": "The principle of equality ensures that all citizens are treated equally before the law and have equal protection of the laws. The Constitution prohibits discrimination on grounds of religion, race, caste, sex, or place of birth (Article 15) and guarantees equality of opportunity in matters of public employment (Article 16)."
      },
      {
          "keyword": "Fraternity",
          "name": "fraternity",
          "message": "Fraternity emphasizes the spirit of brotherhood among all citizens of India. It aims to promote a sense of unity and solidarity, transcending differences of religion, language, and culture. The Constitution seeks to foster a sense of belonging and mutual respect among the diverse population of India."
      },
        
    
]

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

// Function to generate card elements
function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <div class="front-text">${card.keyword}</div> <!-- Changed from image to text -->
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

// Function to handle card flip
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

// Function to check if two cards match
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (isMatch) {
    // If cards match, show a message after a short delay
    setTimeout(() => {
      const matchedCardName = firstCard.dataset.name;
      showMatchMessage(matchedCardName); // Show message if cards match
      disableCards();
    }, 500); // 500ms delay for better UI experience
  } else {
    unflipCards();
  }
}

// Function to display a message when cards match using a modal
function showMatchMessage(cardName) {
  const matchedCard = cards.find(card => card.name === cardName);

  if (matchedCard && matchedCard.message) {
    modalMessage.textContent = matchedCard.message;
    matchModal.style.display = "flex";
  } else {
    console.error("No message found for the matched card:", cardName);
  }
}

// Function to disable matched cards
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

// Function to unflip cards if not matched
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

// Function to reset the board state
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

// Function to restart the game
function restart() {
  resetBoard();
  shuffleCards();
  score = 0; // Reset score when restarting
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}

// Event listener for closing the modal
closeModal.addEventListener("click", () => {
  matchModal.style.display = "none";
  resetBoard();
});

// Optional: Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target == matchModal) {
    matchModal.style.display = "none";
    resetBoard();
  }
});