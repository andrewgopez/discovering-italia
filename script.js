function beginJourney() {
    const landing = document.querySelector(".landing-page");
    const main = document.querySelector(".main-content");

    if (landing && main) {
        landing.classList.add("hidden");
        main.classList.remove("hidden");
    }
}