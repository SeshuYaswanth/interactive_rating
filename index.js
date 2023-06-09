const main_container = document.querySelector(".main_container");
const thank_you = document.querySelector(".thank_you");

const submit = document.getElementById("submit");
const rate_again = document.getElementById("rate_again");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
    thank_you.classList.remove("hidden");
    main_container.style.display = "none"
});

rate_again.addEventListener("click", () => {
    thank_you.classList.add("hidden")
    main_container.style.display = "block"
});

rates.forEach(rate => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})