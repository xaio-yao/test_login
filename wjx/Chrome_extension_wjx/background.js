'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostPrefix: 'www.wjx.cn' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});