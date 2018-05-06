chrome.runtime.onMessage.addListener(function () {
    console.clear();
    chrome.runtime.sendMessage({
        "htmlBody": document.body.innerHTML,
        "url": window.location.href
    });
});