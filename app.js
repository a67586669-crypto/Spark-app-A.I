document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        const mainApp = document.getElementById("main-app");
        if (loader && mainApp) {
            loader.style.display = "none";
            mainApp.classList.remove("hidden");
        }
    }, 2500); 
});
