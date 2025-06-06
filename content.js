// Listen for clicks on all links in the page
document.addEventListener('click', function(event) {
    // Find the closest anchor element
    const link = event.target.closest('a');
    if (!link) return;

    // Check if the link has target="_private"
    if (link.target === '_private' && link.href) {
        event.preventDefault();
        chrome.runtime.sendMessage({
            action: "openPrivateLink",
            url: link.href
        });
    }
}, true);