// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ==============================
// CLOSE MOBILE MENU
// ==============================

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// IMAGE FALLBACK
// ==============================

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        if (image.parentElement) {
            image.parentElement.classList.add("image-missing");
        }

    });

});