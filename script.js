const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");

const ratingNumbers = document.querySelectorAll(".button-rating");
const submitButton = document.querySelector(".submit");
const ratingResult = document.getElementById("rating-result-number");

submitButton.addEventListener("click", () => {
    cardTwo.classList.remove("hidden");
    cardOne.style.display = "none";
})

ratingNumbers.forEach((rating) => {
    rating.addEventListener("click", () => {
        ratingResult.innerHTML = rating.innerHTML;
    })
})


