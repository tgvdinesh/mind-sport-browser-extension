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
chrome.runtime.onInstalled.addListener(function () {
    console.log("Consider installing Mind sport IntelliJ Plugin!")
});