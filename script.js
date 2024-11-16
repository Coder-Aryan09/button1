document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading');

    // Function to show the loading screen
    function showLoading() {
        loadingScreen.style.display = 'flex'; // Show the loading screen
    }

    // Add event listeners to all links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            showLoading();
        });
    });
});