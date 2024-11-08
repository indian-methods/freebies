// Get modal elements
const modal = document.getElementById("modal");
const btn = document.querySelector(".hero-button"); // Updated to use the button in the hero section
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
/ Inspect Mode Detection and Redirection
(function() {
    const redirectToGoogle = () => {
        window.location.href = "https://snippet.host/iniedo";
    };

    const detectDevTools = () => {
        const threshold = 160;
        if (
            window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold
        ) {
            redirectToGoogle();
        }
    };

    // Run detection in an interval to continuously check
    setInterval(detectDevTools, 1000);

    // Additional event listeners for specific devtools key combos
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.key === 'U')) {
            event.preventDefault();
            redirectToGoogle();
        }
    });
})();
