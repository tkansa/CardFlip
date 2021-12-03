const cardContainer = document.getElementById("card-container");


// just adding 4 cards to DOM
for(let i = 0; i < 3; i++){
    let card = document.createElement("div");
    card.classList.add("card");
    let front = document.createElement("div");
    front.classList.add("front");
    front.innerText = "Front";
    card.appendChild(front);
    let back = document.createElement("div");
    back.innerText = "Back"
    back.classList.add("back");
    card.appendChild(back);
    card.addEventListener("click", () => {
        card.classList.toggle("flipCard");
    });
    cardContainer.appendChild(card);
}
