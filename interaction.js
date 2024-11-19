// Handle theme toggle
document.getElementById('themeButton').addEventListener('click', function () {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    const theme = isDarkMode ? 'dark' : 'light';

    // Update button text
    this.textContent = `Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`;

    // Push theme change event to GTM
    window.dataLayer.push({
        event: 'themeChange',
        theme: theme
    });

    logEvent(`Theme changed to ${theme}`);
});

// Handle feedback submission
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const feedback = document.getElementById('feedback').value;

    // Push feedback event to GTM
    window.dataLayer.push({
        event: 'feedbackSubmit',
        feedback: feedback
    });

    logEvent(`Feedback submitted: "${feedback}"`);
});

// Log events on the page
function logEvent(message) {
    const output = document.getElementById('output');
    output.innerHTML = `<strong>Event Triggered:</strong> ${message}`;
}
