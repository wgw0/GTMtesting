// function 2 log events in output div for testing purposes
function logEvent(event) {
    const output = document.getElementById('output');
    output.innerHTML = `<strong>Event Triggered:</strong> ${event}`;
    window.dataLayer.push({
        event: event
    });
}

// button click event
document.getElementById('testButton').addEventListener('click', function () {
    logEvent('buttonClick');
});

// form submission event
document.getElementById('testForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to keep page from reloading
    const name = document.getElementById('name').value;
    logEvent(`formSubmit - Name: ${name}`);
});
