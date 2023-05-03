const frontImages = [
  "assets/drinks/fondo.png",
  "assets/drinks/fondo.png",
  "assets/drinks/fondo.png",
  "assets/drinks/fondo.png",
  "assets/drinks/fondo.png",
  "assets/drinks/fondo.png",
  "assets/drinks/fondo.png",
  "assets/drinks/fondo.png",
];
const backImages = [
  "assets/drinks/elprimerodemuchos1.png",
  "assets/drinks/elprimerodemuchos.png",
  "assets/drinks/flordepepino1.png",
  "assets/drinks/flordepepino.png",
  "assets/drinks/latoxica.png",
  "assets/drinks/latoxica1.png",
  "assets/drinks/pollerudo.png",
  "assets/drinks/pollerudo1.png",
];

const container = document.querySelector(".container");

const totalCards = backImages.length;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function flipcard(card) {
  card.classList.toggle("flipcard");
}

function createCards(cards) {
  let frontImg = shuffle(frontImages);
  let backImg = shuffle(backImages);

  for (let i = 0; i < cards; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);

    const frontCard = document.createElement("div");
    // backCard.setAttribute("src", `${frontImg[i]}`);
    frontCard.setAttribute("class", "front");
    frontCard.style.backgroundImage = `url(${frontImg[i]})`;
    card.appendChild(frontCard);

    const backCard = document.createElement("div");
    // backCard.setAttribute("src", `${backImg[i]}`);
    backCard.setAttribute("class", "back");
    backCard.style.backgroundImage = `url(${backImg[i]})`;
    card.appendChild(backCard);

    card.addEventListener("click", () => {
      card.classList.toggle("flipcard");
    });
  }
}

createCards(totalCards);
