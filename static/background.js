chrome.tabs.onUpdated.addListener(function checkForValidUrl(tabId, changeInfo, tab) {
    if (/https:\/\/.*[.]kattis[.]com\/(contests\/.+\/)?problems\/.*/.test(tab.url) ||
        /https:\/\/.*contest2?[.]yandex[.](ru|com)\/.*contest\/\d*\/problems.*/.test(tab.url) ||
        /http:\/\/codeforces[.](ru|com)\/(contest|problemset|gym)\/(\d*\/problem|problem\/\d*)\/.*/.test(tab.url) ||
        /https:\/\/(www[.])?hackerrank[.]com\/(contests\/.+\/)?challenges\/[^\/].*/.test(tab.url) ||
        /https:\/\/www[.]facebook[.]com\/hackercup\/problem\/\d+\/.*/.test(tab.url) ||
        /http:\/\/(www[.])?usaco[.]org\/(current\/)?index[.]php[?]page[=]viewproblem.*/.test(tab.url) ||
        /https:\/\/code[.]google[.]com\/codejam\/contest\/\d*\/dashboard.*/.test(tab.url) ||
        /http:\/\/contest[.]bayan[.]ir\/en\/contest\/.*\/problem\/[A-Z]\/.*/.test(tab.url) ||
        /https?:\/\/(www[.])?codechef[.]com\/(.*\/)?problems\/.*/.test(tab.url) ||
        /https?:\/\/(www[.])?hackerearth[.]com\/(.*\/)?(algorithm|approximate)\/.*/.test(tab.url) ||
        /https:\/\/csacademy[.]com\/contest\/.*\/task\/.*/.test(tab.url) ||
        /https:\/\/.*[.]contest[.]atcoder[.]jp\/tasks\/.*/.test(tab.url) ||
        /https:\/\/codejam[.]withgoogle[.]com\/.*\/challenges\/.*/.test(tab.url)) {
        chrome.pageAction.show(tabId);
    } else {
        chrome.pageAction.hide(tabId);
    }
});
chrome.pageAction.onClicked.addListener(function (tab) {
    console.log("Here is where we query data from DOM!!");
    chrome.tabs.sendMessage(tab.id, message);
});
chrome.runtime.onMessage.addListener(function (message) {
    payLoad = parseContext(message);
    console.log("Here is where we will post json!! " + JSON.stringify(payLoad));
});

/**
 * Start writing parsing for different websites
 * @param message
 * @returns {{name: string, url: string, memoryLimit: number, timeLimit: number, tests: *[]}}
 */
function parseContext(message) {
    payLoad.url = message.url;
    return payLoad;
}

let payLoad = {
    "name": "Problem title",
    "url": "https://*/*",
    "memoryLimit": 256,
    "timeLimit": 2000,
    "tests": [{
        "input": "1 2\n",
        "output": "3\n"
    }, {
        "input": "5 5\n",
        "output": "10\n"
    }]
};

let message = {
    "htmlBody": "",
    "url": ""
};