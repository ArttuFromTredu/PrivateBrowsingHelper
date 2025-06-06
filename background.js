// Listen for messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Check if the message action is to open a link in a private (incognito) window
    if (request.action === "openPrivateLink") {
        // Create a new incognito window with the specified URL
        chrome.windows.create({
            url: request.url,
            incognito: true
        });
    }
});