// This file contains JavaScript that controls the behavior of the popup page.
// It interacts with the DOM of popup.html, manages user input, and
// communicates with background or content scripts to perform tasks.

// Key Use Cases:
// Handling user interactions in the popup (e.g., button clicks).
// Sending messages to background or content scripts.

console.log("Inside - popup.js");

document.getElementById("deleteButton").addEventListener("click", () => {

    const inputValue = document.getElementById("input-field").value;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Send a message to the content script of the active tab
        chrome.tabs.sendMessage(tabs[0].id, { action: inputValue });
    });
});
