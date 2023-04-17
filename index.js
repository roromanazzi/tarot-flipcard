const frontImages = ["yellow", "blue", "red"];
const backImages = ["lightyellow", "lightblue", "pink"];

const container = document.querySelector(".container");

const totalCards = frontImages.length;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function flipcard(card) {
  card.classList.toggle("flipcard");
}

function createCards(cards) {
  let frontColors = shuffle(frontImages);
  let backColors = shuffle(backImages);

  for (let i = 0; i < cards; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);

    const frontCard = document.createElement("div");
    frontCard.setAttribute("class", "front");
    frontCard.style.backgroundColor = frontColors[i];
    card.appendChild(frontCard);

    const backCard = document.createElement("div");
    backCard.setAttribute("class", "back");
    backCard.style.backgroundColor = backColors[i];
    card.appendChild(backCard);

    card.addEventListener("click", () => {
      card.classList.toggle("flipcard");
    });
  }
}

createCards(totalCards);
