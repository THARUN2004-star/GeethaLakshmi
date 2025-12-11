document.addEventListener('DOMContentLoaded', function() {
    // Get the button
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Scroll Logic
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Click Logic
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});