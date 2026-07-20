const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
} else {
    if (themeToggle) themeToggle.textContent = "🌙";
}

// Theme toggle
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
}

// Back to top
if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// Active highlighting
const currentPage = window.location.pathname;

document.querySelectorAll(".navbar a").forEach((link) => {
    const anchor = link;

    if (anchor instanceof HTMLAnchorElement && anchor.href.includes(currentPage)) {
        anchor.classList.add("active");
    }
});