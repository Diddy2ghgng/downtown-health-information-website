// Fixed script.js for collapsible sections
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            content.classList.toggle("active");
            button.querySelector(".arrow").classList.toggle("rotate");

            // Hide other open sections when clicking a new one
            toggleButtons.forEach((otherButton) => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.classList.remove("active");
                    otherButton.querySelector(".arrow").classList.remove("rotate");
                }
            });
        });
    });
});
