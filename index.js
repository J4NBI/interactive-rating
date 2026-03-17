const form = document.querySelector("form");
const cardSub = document.querySelector(".card-submitted");
const card = document.querySelector(".card");
const ratingCount = document.querySelector(".rating-count");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const rating = formData.get("rating");
  card.classList.add("hidden");
  cardSub.classList.remove("hidden");
  ratingCount.innerHTML = rating;
  setTimeout(() => {
    cardSub.classList.add("hidden");
    card.classList.remove("hidden");
    e.target.reset();
  }, 5000);
}
