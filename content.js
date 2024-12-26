// content.js runs just after the page loads

// Content scripts are JavaScript files that run in the context of web pages the user visits.
// These scripts can access and modify the DOM of the page. Content scripts are injected into
// the pages specified in the manifest's content_scripts section.

// Communicate with background or popup scripts.
console.log("Inside - content.js");

console.log("Page Accessing:", document.title);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action) {

        const elementId = message.action;

        const element = document.getElementById(elementId);
        if (element) {
            element.remove();
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.log(`No element found with ID '${elementId}'.`);
        }
    }
});
