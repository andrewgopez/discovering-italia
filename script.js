const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");

// Theme toggle
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
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