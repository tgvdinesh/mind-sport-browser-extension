function checkForValidUrl(tabId, changeInfo, tab) {
    if (/^https:\/\/.*[.]kattis[.]com\/(contests\/.+\/)?problems\/.*$/.test(tab.url) ||
        /^https:\/\/.*contest2?[.]yandex[.](ru|com)\/.*contest\/\d*\/problems.*$/.test(tab.url) ||
        /^http:\/\/codeforces[.](ru|com)\/(contest|problemset|gym)\/(\d*\/problem|problem\/\d*)\/.+$/.test(tab.url) ||
        /https:\/\/(www[.])?hackerrank[.]com\/(contests\/.+\/)?challenges\/[^\/].*/.test(tab.url) ||
        /^https:\/\/www[.]facebook[.]com\/hackercup\/problem\/\d+\/$/.test(tab.url) ||
        /^http:\/\/(www[.])?usaco[.]org\/(current\/)?index[.]php[?]page[=]viewproblem.*$/.test(tab.url) ||
        /^https:\/\/code[.]google[.]com\/codejam\/contest\/\d*\/dashboard.*$/.test(tab.url) ||
        /^http:\/\/contest[.]bayan[.]ir\/en\/contest\/.*\/problem\/[A-Z]\/$/.test(tab.url) ||
        /^https?:\/\/(www[.])?codechef[.]com\/(.*\/)?problems\/.*$/.test(tab.url) ||
        /^https?:\/\/(www[.])?hackerearth[.]com\/(.*\/)?(algorithm|approximate)\/.*$/.test(tab.url) ||
        /^https:\/\/csacademy[.]com\/contest\/.*\/task\/.*$/.test(tab.url) ||
        /^https:\/\/.*[.]contest[.]atcoder[.]jp\/tasks\/.*$/.test(tab.url) ||
        /^https:\/\/codejam[.]withgoogle[.]com\/.*\/challenges\/.*$/.test(tab.url)) {
        chrome.pageAction.show(tabId);
    } else {
        chrome.pageAction.hide(tabId);
    }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);