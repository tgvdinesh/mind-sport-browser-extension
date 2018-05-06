chrome.runtime.onMessage.addListener(function () {
    console.clear();
    let promise = chrome.runtime.sendMessage({
        "htmlBody": document.body.innerHTML,
        "url": window.location.href
    });
    console.clear();
    console.log(message);
    console.log(promise);
});

//TODO: Extension is disabled by default and not working for content_scripts/matches. Need a Fix!!
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.pageAction.show(tabs[0].id);
});