const cardContainer = document.getElementById('card');
const front = document.getElementById('front');

async function loadCards() {
  const response = await fetch('data/cards.json');
  const cards = await response.json();
  return cards;
}

async function showRandomCard() {
  const cards = await loadCards();
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  document.getElementById('cardImage').src = randomCard.image;
  document.getElementById('cardName').textContent = randomCard.name;
  document.getElementById('cardKeywords').textContent = randomCard.keywords;
  document.getElementById('cardMessage').textContent = randomCard.message;
}

cardContainer.addEventListener('click', () => {
  cardContainer.classList.toggle('flip');
  if (cardContainer.classList.contains('flip')) {
    showRandomCard();
  }
});
